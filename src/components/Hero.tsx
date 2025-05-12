
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const typewriterTexts = ["Lectures", "Exams", "Study Sessions", "Note Taking"];
  const typewriterSpeed = 100; // milliseconds per character
  const typewriterDelayBetweenWords = 2000; // milliseconds between words
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentText = typewriterTexts[typewriterIndex];
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typewriterSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, typewriterDelayBetweenWords);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typewriterSpeed / 2);
      } else {
        setTypewriterIndex((typewriterIndex + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, typewriterIndex, typewriterTexts]);

  return (
    <section className="min-h-[70vh] pt-24 flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`w-full max-w-4xl space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{animationDelay: '0.2s'}}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              <span className="text-neon-blue neon-text">AI to Crush Your</span>
              <br />
              <span className="typewriter-container"><span className="typewriter">{displayText}</span><span className="cursor">|</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              InnovAItive records your lectures, transcribes them, syncs the transcripts with the slides, turning your professor's words into fifth-grader-crystal clear explanations and advanced summaries for every slide—instantly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button 
                size="lg"
                className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6 text-fade-button"
                onClick={() => console.log('Student signup')}
              >
                <span className="default-text">Empower your Lectures</span>
                <span className="hover-text">For Students</span>
              </Button>
              
              <Button 
                size="lg"
                className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6 text-fade-button"
                onClick={() => console.log('Professor signup')}
              >
                <span className="default-text">Empower your Class</span>
                <span className="hover-text">For Professors</span>
              </Button>
              
              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6 text-fade-button"
                >
                  <span className="default-text">Empower your Institution</span>
                  <span className="hover-text">For Universities</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
