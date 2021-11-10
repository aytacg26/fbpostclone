import React, { useState, useEffect, useRef } from 'react';
import classes from './TextArea.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
  title?: string;
  label?: string;
  value: string;
  maxLength?: number;
  counterText?: string;
  showCounter?: boolean;
  warningMessage?: string;
  notValid: boolean;
  useTextError?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

let rowAdded = [{ count: 0, charSize: 0 }]; //This one used outside of function, instead of as state, state version tried but creates problems because of state update
//latecy.
const TextArea = ({
  onChange,
  placeholder,
  name,
  title,
  label,
  value,
  maxLength,
  counterText,
  showCounter,
  warningMessage,
  notValid,
  useTextError,
  onBlur,
}: IProps) => {
  const [rowSize, setRowSize] = useState(4);
  const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
  const [counter, setCounter] = useState(0);
  const [counterInit, setCounterInit] = useState(0);
  const [initScrollHeight, setInitScrollHeight] = useState<number>(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    //Both are same but, one changes in every expand of textarea, the other one remains same for the end of shrink process
    if (textAreaRef.current) {
      setCurrentScrollHeight(textAreaRef.current.scrollHeight);
      setInitScrollHeight(textAreaRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const countValue = maxLength || 500;
    setCounter(countValue);
    setCounterInit(countValue);
  }, [maxLength]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e);

    setCounter((prevState) => {
      if (e.target && counterInit - prevState > e.target.value.length) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });

    if (e.target && e.target.scrollHeight > currentScrollHeight) {
      setRowSize((prevState) => prevState + 1);
      setCurrentScrollHeight(e.target.scrollHeight);
      //convert to number array and use push method to add new charSize
      rowAdded = [
        ...rowAdded,
        {
          count: rowAdded[rowAdded.length - 1].count + 1, //not required, unnecessary calculation and copy process.
          charSize: e.target.value.length,
        },
      ];
    }

    //instead of rowAdded[rowAdded.length-1].charSize, use  rowAdded[rowAdded.length-1]
    if (
      rowAdded.length > 0 &&
      e.target.value.length < rowAdded[rowAdded.length - 1].charSize
    ) {
      setRowSize((prevState) => prevState - 1);
      rowAdded.pop();

      if (rowAdded.length === 1) {
        setCurrentScrollHeight(initScrollHeight);
      }
    }

    //prevent unnecessary space at the beginning of message and also in case of select&delete by the help
    //of mouse & backspace, it will set counter to maxLength
    if (textAreaRef.current && textAreaRef.current.value.trim() === '') {
      setCounter(maxLength || 500);
      textAreaRef.current.value = '';
    }
  };

  const textClass = `${classes.TextArea} ${notValid ? classes.NotValid : ''}`;
  const warningClass = `${classes.WarningContainer} ${
    notValid ? classes.Show : ''
  }`;

  return (
    <label className={classes.textareaLabel}>
      {/* <span>Label</span>  This part should work like in Input Component*/}
      <textarea
        rows={rowSize}
        cols={50}
        placeholder={placeholder}
        name={name}
        title={title}
        maxLength={counterInit}
        value={value}
        className={textClass}
        onChange={handleChange}
        onBlur={onBlur}
        ref={textAreaRef}
        style={{ marginBottom: !showCounter ? '15px' : '' }}
      ></textarea>
      {label && (
        <span
          className={`${classes.Label} ${value ? classes.filled : ''} ${
            notValid ? classes.NotValid : ''
          }`}
        >
          {label}
        </span>
      )}
      {warningMessage && !useTextError && (
        <div className={warningClass}>
          <span className={classes.Triangle}></span>
          <div className={classes.Warning}>{warningMessage}</div>
        </div>
      )}
      {showCounter && (
        <div
          className={`${classes.remainingAmount} ${
            notValid ? classes.NotValid : ''
          }`}
        >
          <span className={classes.CounterText}>{counterText}</span>
          <span className={classes.MaxLength}>{counter}</span>
        </div>
      )}
      {useTextError && notValid && (
        <span className={classes.TextError}>{warningMessage}</span>
      )}
    </label>
  );
};

export default TextArea;

TextArea.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  counterText: PropTypes.string,
  showCounter: PropTypes.bool,
  warningMessage: PropTypes.string,
  notValid: PropTypes.bool,
  useTextError: PropTypes.bool,
  onBlur: PropTypes.func,
};

TextArea.defaultProps = {
  counterText: 'Remaining : ',
  maxLength: 200,
  notValid: false,
  placeholder: 'Please enter your message...',
  showCounter: false,
  useTextError: false,
};
