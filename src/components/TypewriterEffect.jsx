import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words, onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;

    const word = words[currentWordIndex];
    const shouldDelete = isDeleting;
    const delay = shouldDelete ? 50 : 70;

    const timer = setTimeout(() => {
      if (!shouldDelete && currentText === word) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return;
      }

      if (shouldDelete && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => {
          if (prev === words.length - 1) {
            setIsDone(true);
            onComplete();
            return prev;
          }
          return prev + 1;
        });
        return;
      }

      setCurrentText((prev) => {
        if (shouldDelete) {
          return prev.slice(0, -1);
        }
        return word.slice(0, prev.length + 1);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, isDone, onComplete]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
