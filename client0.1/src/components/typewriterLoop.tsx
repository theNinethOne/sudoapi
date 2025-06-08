import { useState, useEffect } from "react";

//@ts-ignore
const TypewriterLoop = ({ phrases , typingSpeed = 100, pauseTime = 1500, deletingSpeed = 50 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, charIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="font-mono text-white text-4xl">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypewriterLoop;
