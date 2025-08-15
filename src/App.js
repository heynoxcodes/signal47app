
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemLogView = ({ onSecretFound }) => {
  const systemLogs = [
    "INITIATING DEEP-LINK PROTOCOL...",
    "ACCESSING MEMORY CORE 7...",
    "WARNING: CORE UNSTABLE.",
    "...",
    "LOG ENTRY 4815: Signal origin unknown. High-energy neutrino burst detected.",
    "LOG ENTRY 4816: Signal exhibits non-random patterns. Intelligence confirmed.",
    "LOG ENTRY 4817: Pattern matches quarantine signature 'VY-7'.",
    "LOG ENTRY 4818: Quarantine breached. Containment failed.",
    "LOG ENTRY 4819: They are listening to our broadcasts.",
    "LOG ENTRY 4820: They are repeating our broadcasts.",
    "LOG ENTRY 4821: THEY ARE WEARING OUR FACES.",
    "...",
    "LOG ENTRY 4822: Decrypt key: ROSWELL1947",
    "LOG ENTRY 4823: [ENCRYPTED] Gur fvtany vf abg sebz urer.",
    "...",
    "SYSTEM ERROR: CONNECTION TERMINATED.",
    "REASON: [REDACTED]",
  ];

  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    systemLogs.forEach((log, index) => {
      setTimeout(() => {
        setDisplayedLogs(prev => [...prev, log]);
        if (index === systemLogs.length - 1) {
          setTimeout(() => setShowInput(true), 2000);
        }
      }, index * 400 + Math.random() * 200);
    });
  }, []);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'roswell1947') {
      onSecretFound('cipher');
    }
  };

  return (
    <div className="w-full max-w-2xl p-4 text-left">
      <div className="font-mono text-green-500 text-sm md:text-base leading-relaxed">
        {displayedLogs.map((log, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="whitespace-pre-wrap"
          >
            &gt; {log}
          </motion.p>
        ))}
        {displayedLogs.length === systemLogs.length && (
          <div className="inline-block h-5 w-2 bg-green-500 animate-pulse ml-2" />
        )}
      </div>
      
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <form onSubmit={handleInputSubmit} className="flex items-center">
              <span className="text-green-500 font-mono">&gt; </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent text-green-500 font-mono outline-none ml-2 flex-1"
                placeholder="enter decrypt key..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CipherView = ({ onSecretFound }) => {
  const [decrypted, setDecrypted] = useState(false);
  const [coordinates, setCoordinates] = useState('');
  
  const encryptedMessage = "Gur fvtany vf abg sebz urer.";
  const decryptedMessage = "The signal is not from here.";

  useEffect(() => {
    setTimeout(() => setDecrypted(true), 2000);
  }, []);

  const handleCoordinateSubmit = (e) => {
    e.preventDefault();
    const area51Coords = ['37.2431,-115.7930', '37°14′36″N 115°47′35″W', 'area 51', 'area51'];
    if (area51Coords.some(coord => coordinates.toLowerCase().includes(coord.toLowerCase().replace(/[°″′\s]/g, '')))) {
      onSecretFound('frequency');
    }
  };

  return (
    <div className="w-full max-w-2xl p-4 text-left font-mono">
      <div className="text-green-500 text-sm md:text-base leading-relaxed">
        <p>&gt; DECRYPTING MESSAGE...</p>
        <p>&gt; ROT13 CIPHER DETECTED</p>
        <p>&gt; </p>
        <p>&gt; ENCRYPTED: {encryptedMessage}</p>
        
        <AnimatePresence>
          {decrypted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>&gt; DECRYPTED: {decryptedMessage}</p>
              <p>&gt; </p>
              <p>&gt; SIGNAL TRIANGULATED TO: 37.2431° N, 115.7930° W</p>
              <p>&gt; LOCATION RESTRICTED. DESIGNATION: [REDACTED]</p>
              <p>&gt; </p>
              
              <form onSubmit={handleCoordinateSubmit} className="flex items-center mt-4">
                <span>&gt; ENTER LOCATION NAME: </span>
                <input
                  type="text"
                  value={coordinates}
                  onChange={(e) => setCoordinates(e.target.value)}
                  className="bg-transparent text-green-500 outline-none ml-2 flex-1"
                  placeholder="classified location..."
                  autoFocus
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FrequencyView = ({ onSecretFound }) => {
  const [sequence, setSequence] = useState([]);
  const correctSequence = [4, 6, 2, 5];
  const [showPuzzle, setShowPuzzle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPuzzle(true), 3000);
  }, []);

  const handleFrequencyClick = (digit) => {
    const newSequence = [...sequence, digit];
    setSequence(newSequence);
    
    if (newSequence.length === correctSequence.length) {
      if (JSON.stringify(newSequence) === JSON.stringify(correctSequence)) {
        onSecretFound('memory');
      } else {
        setTimeout(() => setSequence([]), 1000);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl p-4 text-center font-mono">
      <div className="text-green-500 text-sm md:text-base leading-relaxed">
        <p>&gt; ACCESS GRANTED: AREA 51 DATABASE</p>
        <p>&gt; RETRIEVING ARCHIVED TRANSMISSIONS...</p>
        <p>&gt; </p>
        <p>&gt; FOUND: 1 ACTIVE SIGNAL</p>
        <p>&gt; FREQUENCY: 4.625 MHz</p>
        <p>&gt; STATUS: BROADCASTING</p>
        <p>&gt; </p>
        <p>&gt; WARNING: SIGNAL MODULATED</p>
        <p>&gt; MANUAL TUNING REQUIRED</p>
        
        <AnimatePresence>
          {showPuzzle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <p className="mb-6">&gt; TUNE TO FREQUENCY: 4.625 MHz</p>
              <p className="mb-4 text-xs">Click the digits in the correct order:</p>
              
              <div className="grid grid-cols-5 gap-4 max-w-xs mx-auto mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                  <motion.button
                    key={digit}
                    onClick={() => handleFrequencyClick(digit)}
                    className="w-12 h-12 border border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {digit}
                  </motion.button>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mb-4">
                {sequence.map((digit, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 border border-green-500 flex items-center justify-center text-green-500"
                  >
                    {digit}
                  </div>
                ))}
                {Array(correctSequence.length - sequence.length).fill(0).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="w-8 h-8 border border-green-500 opacity-30"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MemoryGameView = ({ onSecretFound }) => {
  const [pattern, setPattern] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [showPattern, setShowPattern] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [round, setRound] = useState(1);

  const maxRounds = 3;
  const gridSize = 9;
  const timeouts = useRef([]);

  const clearAllTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const generateNewPattern = () => {
    clearAllTimeouts();
    const newPattern = [];
    for (let i = 0; i < round + 2; i++) {
      newPattern.push(Math.floor(Math.random() * gridSize));
    }
    setPattern(newPattern);
    setUserInput([]);
    setShowPattern(false);
    setGameActive(false);

    // show pattern after 1s
    timeouts.current.push(
      setTimeout(() => {
        setShowPattern(true);

        // hide pattern after 2s + round*500ms
        timeouts.current.push(
          setTimeout(() => {
            setShowPattern(false);
            setGameActive(true);
          }, 2000 + round * 500)
        );
      }, 1000)
    );
  };

  useEffect(() => {
    generateNewPattern();
    return () => clearAllTimeouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  const handleCellClick = (index) => {
    if (!gameActive) return;

    const newInput = [...userInput, index];
    setUserInput(newInput);

    // wrong click
    if (newInput[newInput.length - 1] !== pattern[newInput.length - 1]) {
      setGameActive(false);
      timeouts.current.push(
        setTimeout(() => {
          generateNewPattern();
        }, 500)
      );
      return;
    }

    // correct sequence completed
    if (newInput.length === pattern.length) {
      if (round >= maxRounds) {
        onSecretFound("binary");
      } else {
        setGameActive(false);
        timeouts.current.push(
          setTimeout(() => setRound((prev) => prev + 1), 1000)
        );
      }
    }
  };

  return (
    <div className="w-full max-w-md p-4 text-center">
      <div className="text-white text-lg mb-6 font-mono">
        <p className="mb-2">MEMORY PROTOCOL ACTIVATED</p>
        <p className="text-sm opacity-70">
          Round {round}/{maxRounds}
        </p>
        <p className="text-xs mt-4 opacity-60">
          {!gameActive && !showPattern
            ? "Watch the pattern..."
            : showPattern
            ? "Memorize the sequence"
            : "Click the cells in order"}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
        {Array(gridSize)
          .fill(0)
          .map((_, index) => {
            const patternIndex = pattern.indexOf(index);
            const shouldGlow = showPattern && patternIndex !== -1;
            const userClicked = userInput.includes(index);

            return (
              <motion.button
                key={index}
                onClick={() => handleCellClick(index)}
                className={`w-20 h-20 border-2 transition-all duration-300 ${
                  shouldGlow
                    ? "bg-blue-500 border-blue-400"
                    : userClicked
                    ? "bg-green-500 border-green-400"
                    : "border-gray-600 hover:border-gray-400"
                }`}
                animate={shouldGlow ? { scale: [1, 1.1, 1] } : {}}
                transition={{
                  duration: 0.5,
                  delay: patternIndex !== -1 ? patternIndex * 0.3 : 0,
                }}
              >
                {showPattern && patternIndex !== -1 && (
                  <span className="text-white font-bold">{patternIndex + 1}</span>
                )}
              </motion.button>
            );
          })}
      </div>
    </div>
  );
};

const BinaryPuzzleView = ({ onSecretFound }) => {
  const [binaryInput, setBinaryInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  
  // "HELLO" in ASCII binary
  const correctBinary = '0100100001000101010011000100110001001111';
  const hintMessage = "Convert 'HELLO' to ASCII binary";

  useEffect(() => {
    setTimeout(() => setShowHint(true), 5000);
  }, []);

  const handleBinarySubmit = (e) => {
    e.preventDefault();
    if (binaryInput.replace(/\s/g, '') === correctBinary) {
      onSecretFound('archives');
    } else {
      // Clear input on wrong answer
      setBinaryInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl p-4 text-center font-mono">
      <div className="text-cyan-400 text-sm md:text-base leading-relaxed">
        <p>&gt; BINARY TRANSMISSION DETECTED</p>
        <p>&gt; DECODING REQUIRED FOR ACCESS</p>
        <p>&gt; </p>
        <p>&gt; MESSAGE: "First contact greeting protocol"</p>
        <p>&gt; FORMAT: ASCII to Binary</p>
        <p>&gt; </p>
        
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <p className="text-yellow-400 text-xs">&gt; HINT: {hintMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleBinarySubmit} className="mt-8">
          <div className="mb-4">
            <input
              type="text"
              value={binaryInput}
              onChange={(e) => setBinaryInput(e.target.value)}
              className="w-full bg-transparent border border-cyan-400 p-3 text-cyan-400 font-mono text-center"
              placeholder="Enter binary code (0s and 1s only)..."
              pattern="[01\s]+"
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
          >
            DECODE TRANSMISSION
          </button>
        </form>

        <div className="mt-6 text-xs opacity-60">
          <p>Expected format: 40 binary digits (8 bits per character)</p>
        </div>
      </div>
    </div>
  );
};

const MathPuzzleView = ({ onSecretFound }) => {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  
  // Drake Equation simplified result
  const correctAnswer = '1000';
  
  useEffect(() => {
    setTimeout(() => setShowHint(true), 8000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === correctAnswer) {
      onSecretFound('testimonials');
    } else {
      setAnswer('');
    }
  };

  return (
    <div className="w-full max-w-3xl p-4 text-center font-mono">
      <div className="text-orange-400 text-sm md:text-base leading-relaxed">
        <p>&gt; DRAKE EQUATION CALCULATION REQUIRED</p>
        <p>&gt; ESTIMATING COMMUNICATING CIVILIZATIONS</p>
        <p>&gt; </p>
        <div className="text-left mb-8 bg-gray-900 p-4 border border-orange-600">
          <p className="mb-4">N = R* × fp × ne × fl × fi × fc × L</p>
          <p className="text-xs mb-2">Where:</p>
          <p className="text-xs">R* = 10 (stars formed per year)</p>
          <p className="text-xs">fp = 0.5 (fraction with planets)</p>
          <p className="text-xs">ne = 2 (habitable planets per system)</p>
          <p className="text-xs">fl = 1 (fraction that develop life)</p>
          <p className="text-xs">fi = 0.1 (fraction that develop intelligence)</p>
          <p className="text-xs">fc = 0.1 (fraction that develop communication)</p>
          <p className="text-xs">L = 10000 (years civilizations communicate)</p>
        </div>

        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 text-yellow-400 text-xs"
            >
              <p>&gt; HINT: Multiply all values together</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit}>
          <p className="mb-4">&gt; HOW MANY CIVILIZATIONS EXIST?</p>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-32 bg-transparent border border-orange-400 p-2 text-center text-orange-400"
            placeholder="N = ?"
            autoFocus
          />
          <div className="mt-4">
            <button
              type="submit"
              className="px-6 py-2 border border-orange-400 hover:bg-orange-400 hover:text-black transition-colors"
            >
              CALCULATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ArchivesView = ({ onSecretFound }) => {
  const [currentDoc, setCurrentDoc] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const documents = [
    {
      title: "CLASSIFIED MEMORANDUM - PROJECT BLUE BOOK",
      date: "July 8, 1947",
      content: [
        "SUBJECT: Unidentified Aerial Phenomena - Roswell, NM",
        "",
        "At 0300 hours, rancher Mac Brazel reported unusual debris",
        "scattered across his property. Military recovery team dispatched.",
        "",
        "Initial assessment: Weather balloon. Public briefing conducted.",
        "Actual assessment: [REDACTED]",
        "",
        "Material samples secured. Transport to Facility S-4 authorized.",
        "Personnel assigned Class-A amnesiacs per Protocol 7.",
        "",
        "NOTE: This incident never occurred. Official records amended.",
        "",
        "- Colonel William Blanchard"
      ]
    },
    {
      title: "INCIDENT REPORT - THE CHICAGO O'HARE EVENT", 
      date: "November 7, 2006",
      content: [
        "12:00 CST - Multiple witnesses report metallic disc hovering",
        "over Gate C17. Object estimated 6-24 feet in diameter.",
        "",
        "12:15 CST - Object accelerates upward, punching hole in cloud layer.",
        "Hole remains visible for 15 minutes.",
        "",
        "WITNESSES: 12 United Airlines employees, multiple passengers",
        "RADAR: No official detection (anomalous readings dismissed)",
        "MEDIA: Story suppressed for 2 months",
        "",
        "OFFICIAL EXPLANATION: Weather phenomenon",
        "ACTUAL STATUS: Routine surveillance operation",
        "",
        "They are monitoring our transportation hubs.",
        "Recommend increased counter-surveillance protocols.",
        "",
        "- Agent Sarah Chen, Division 6"
      ]
    },
    {
      title: "DEEP BLACK TRANSCRIPT - THE FERMI QUESTION",
      date: "August 15, 1950", 
      content: [
        "PARTICIPANTS: Dr. Enrico Fermi, Dr. Edward Teller,",
        "Dr. Herbert York, Emil Konopinski",
        "",
        "FERMI: 'Where is everybody?'",
        "",
        "The question that launched a thousand theories.",
        "What Fermi didn't know: They were already here.",
        "",
        "DECLASSIFIED ADDENDUM (1997):",
        "Radio telescopes had been detecting structured signals",
        "since 1933. The Wow! Signal was not an anomaly.",
        "It was a greeting.",
        "",
        "The Great Filter is not ahead of us.",
        "It is the realization that we are not alone,",
        "and never have been.",
        "",
        "- Dr. Frank Drake, SETI Institute (CLASSIFIED NOTES)"
      ]
    },
    {
      title: "THE ANTARCTIC DISCOVERY - OPERATION HIGHJUMP",
      date: "February 1947",
      content: [
        "Admiral Byrd's final transmission (CLASSIFIED):",
        "",
        "'We have found something that should not exist.'",
        "'The ice here is not natural. It's a shell.'",
        "'There are structures beneath. Ancient. Vast.'",
        "'We are not the first intelligent species on Earth.'",
        "",
        "Radio contact lost at 14:37 GMT.",
        "Expedition officially terminated due to 'weather conditions.'",
        "",
        "Recovery team found empty research station.",
        "All personnel missing except for one man:",
        "Dr. Heinrich Krueger, found catatonic, repeating",
        "'They've been sleeping for so long, but they're waking up.'",
        "",
        "The Antarctic Treaty of 1959 was not about peace.",
        "It was about containment.",
        "",
        "- Director Allen Dulles, CIA"
      ]
    },
    {
      title: "THE CHILDREN OF HYBRIDIZATION PROJECT",
      date: "Ongoing Since 1961",
      content: [
        "Phase 1: Contact (1947-1960) - COMPLETE",
        "Phase 2: Study (1961-1980) - COMPLETE", 
        "Phase 3: Integration (1981-2012) - COMPLETE",
        "Phase 4: Hybridization (2013-Present) - IN PROGRESS",
        "",
        "The abduction phenomenon is not random.",
        "Specific genetic markers targeted:",
        "- RH-negative blood types",
        "- Celtic/Nordic ancestry",
        "- High electromagnetic sensitivity",
        "",
        "Current hybrid population estimated: 2.3 million globally",
        "Integration rate: 47% successful",
        "Rejection rate: 31% (subjects amnestized)",
        "Casualty rate: [REDACTED]",
        "",
        "The children remember nothing, but they are different.",
        "Enhanced pattern recognition, lucid dreaming,",
        "electromagnetic sensitivity, and most importantly:",
        "An inexplicable urge to 'look up' at the night sky.",
        "",
        "They are preparing us for something."
      ]
    }
  ];

  useEffect(() => {
    setTimeout(() => setShowNavigation(true), 3000);
  }, []);

  const nextDoc = () => {
    if (currentDoc < documents.length - 1) {
      setCurrentDoc(currentDoc + 1);
    } else {
      onSecretFound('math');
    }
  };

  const prevDoc = () => {
    if (currentDoc > 0) setCurrentDoc(currentDoc - 1);
  };

  return (
    <div className="w-full max-w-4xl p-6 text-left font-mono">
      <div className="text-amber-300 text-sm leading-relaxed">
        <motion.div
          key={currentDoc}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="border border-amber-600 p-6 bg-black/50"
        >
          <div className="text-red-500 mb-2">● CLASSIFIED ● EYES ONLY ●</div>
          <h2 className="text-lg font-bold mb-2 text-amber-100">{documents[currentDoc].title}</h2>
          <div className="text-amber-400 mb-4">DATE: {documents[currentDoc].date}</div>
          
          {documents[currentDoc].content.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-1"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {showNavigation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between mt-6"
            >
              <button
                onClick={prevDoc}
                disabled={currentDoc === 0}
                className="px-4 py-2 border border-amber-600 hover:bg-amber-600 hover:text-black transition-colors disabled:opacity-30"
              >
                ← PREV
              </button>
              
              <span className="px-4 py-2">
                DOCUMENT {currentDoc + 1} OF {documents.length}
              </span>
              
              <button
                onClick={nextDoc}
                className="px-4 py-2 border border-amber-600 hover:bg-amber-600 hover:text-black transition-colors"
              >
                {currentDoc === documents.length - 1 ? 'CONTINUE →' : 'NEXT →'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TestimonialsView = ({ onSecretFound }) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      role: "Former NASA Engineer", 
      date: "March 2019",
      content: "I worked on the Mars Curiosity project for six years. What they don't tell you is that we found structures in the first month. Geometric patterns that couldn't be natural. The photos were classified immediately. I was transferred to 'weather satellite monitoring' the next week. I've been followed ever since I started talking."
    },
    {
      name: "Lieutenant Colonel James Morrison",
      role: "USAF Pilot (Retired)",
      date: "June 2017", 
      content: "Over Nevada in '98, I encountered three objects moving in impossible formations. No sonic booms, no heat signatures, but they outmaneuvered my F-22 like I was standing still. When I reported it, I was grounded for 'stress evaluation.' The incident was classified. They gave me a medal for 'exemplary service' and early retirement. The message was clear."
    },
    {
      name: "Anonymous Witness",
      role: "Former Government Employee",
      date: "December 2020",
      content: "I can't use my real name. They know who I am. I worked in data analysis for a three-letter agency. My job was to monitor SETI data for patterns. In 2018, we detected a signal that wasn't random. It was mathematical, structured, clearly artificial. The source was moving - not a planet, not a star. Something traveling between systems. The project was shut down the next day. Everyone was reassigned or 'let go.'"
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Marine Biologist",
      date: "August 2021",
      content: "The ocean trenches hide more than we know. During deep-sea research near the Mariana Trench, our sonar detected geometric structures - perfectly symmetrical, clearly artificial. When we tried to get closer, all our equipment malfunctioned simultaneously. The expedition was called off for 'technical difficulties.' The footage disappeared from our servers. They offered me a promotion to keep quiet."
    },
    {
      name: "Michael Chen",
      role: "Radio Telescope Technician",
      date: "January 2022",
      content: "Working the night shift at Arecibo before it was decommissioned. We picked up signals constantly - signals that followed patterns, had structure, purpose. The day shift never saw them. Only us night workers knew. We were told they were equipment malfunctions, but equipment doesn't malfunction in prime number sequences. The telescope's destruction wasn't an accident."
    },
    {
      name: "Dr. Thomas Blackwood",
      role: "Quantum Physicist",
      date: "September 2023",
      content: "Quantum entanglement experiments show consciousness affects reality at the subatomic level. But what we discovered went further. We detected external consciousness - vast, alien minds observing our experiments. When we tried to establish communication protocols, the funding was cut overnight. The lab was sealed. I've been blacklisted from all academic institutions since."
    }
  ];

  useEffect(() => {
    setTimeout(() => setShowControls(true), 4000);
  }, []);

  const nextTestimony = () => {
    if (currentTestimony < testimonials.length - 1) {
      setCurrentTestimony(currentTestimony + 1);
    } else {
      onSecretFound('maze');
    }
  };

  const prevTestimony = () => {
    if (currentTestimony > 0) setCurrentTestimony(currentTestimony - 1);
  };

  return (
    <div className="w-full max-w-3xl p-6 text-left">
      <div className="text-white text-sm leading-relaxed">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-400 mb-2">WHISTLEBLOWER TESTIMONIES</h2>
          <p className="text-gray-400">Voices from the Inside</p>
        </div>

        <motion.div
          key={currentTestimony}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 border border-red-600 p-6 rounded-lg"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-red-300">{testimonials[currentTestimony].name}</h3>
              <p className="text-gray-400 text-sm">{testimonials[currentTestimony].role}</p>
            </div>
            <span className="text-xs text-gray-500">{testimonials[currentTestimony].date}</span>
          </div>
          
          <div className="text-gray-300 leading-relaxed font-serif italic">
            "{testimonials[currentTestimony].content}"
          </div>
        </motion.div>

        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between mt-6"
            >
              <button
                onClick={prevTestimony}
                disabled={currentTestimony === 0}
                className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← PREVIOUS
              </button>
              
              <span className="px-4 py-2 text-gray-400">
                TESTIMONY {currentTestimony + 1} OF {testimonials.length}
              </span>
              
              <button
                onClick={nextTestimony}
                className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-colors"
              >
                {currentTestimony === testimonials.length - 1 ? 'CONTINUE →' : 'NEXT →'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MazeView = ({ onSecretFound }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMaze, setShowMaze] = useState(false);
  
  // Simple 5x5 maze: 0 = wall, 1 = path, 2 = exit
  const maze = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 2]
  ];

  useEffect(() => {
    setTimeout(() => setShowMaze(true), 2000);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showMaze) return;
      
      let newX = position.x;
      let newY = position.y;

      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          newY = Math.max(0, newY - 1);
          break;
        case 's':
        case 'arrowdown':
          newY = Math.min(4, newY + 1);
          break;
        case 'a':
        case 'arrowleft':
          newX = Math.max(0, newX - 1);
          break;
        case 'd':
        case 'arrowright':
          newX = Math.min(4, newX + 1);
          break;
      }

      if (maze[newY][newX] !== 0) {
        setPosition({ x: newX, y: newY });
        
        if (maze[newY][newX] === 2) {
          setTimeout(() => onSecretFound('portal'), 1000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position, showMaze, onSecretFound]);

  return (
    <div className="w-full max-w-md p-4 text-center text-white font-mono">
      <p className="mb-4">NAVIGATION PROTOCOL</p>
      <p className="text-sm mb-6 opacity-70">Use WASD or arrow keys to move</p>
      
      <AnimatePresence>
        {showMaze && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-5 gap-1 max-w-xs mx-auto"
          >
            {maze.flat().map((cell, index) => {
              const x = index % 5;
              const y = Math.floor(index / 5);
              const isPlayer = position.x === x && position.y === y;
              
              return (
                <div
                  key={index}
                  className={`w-12 h-12 border ${
                    cell === 0 ? 'bg-gray-800 border-gray-700' :
                    cell === 2 ? 'bg-yellow-600 border-yellow-500' :
                    'bg-gray-900 border-gray-600'
                  } flex items-center justify-center`}
                >
                  {isPlayer && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-3 h-3 bg-blue-500 rounded-full"
                    />
                  )}
                  {cell === 2 && !isPlayer && (
                    <div className="text-yellow-400 text-xs">EXIT</div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PortalView = ({ onSecretFound }) => {
  const [chars, setChars] = useState('');
  const [showInput, setShowInput] = useState(false);
  
  const targetPhrase = 'we come in peace';

  useEffect(() => {
    const scrambledChars = 'moc  ew eecnip ean'.split('');
    let currentChars = '';
    
    scrambledChars.forEach((char, index) => {
      setTimeout(() => {
        currentChars += char;
        setChars(currentChars);
        
        if (index === scrambledChars.length - 1) {
          setTimeout(() => setShowInput(true), 2000);
        }
      }, index * 200);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.phrase.value.toLowerCase().trim();
    if (input === targetPhrase) {
      onSecretFound('revelation');
    } else {
      setChars('');
      setShowInput(false);
      setTimeout(() => {
        setChars('moc  ew eecnip ean');
        setShowInput(true);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-md p-4 text-center text-white font-mono">
      <div className="mb-8">
        <p className="text-lg mb-4">PORTAL ACTIVATED</p>
        <p className="text-sm opacity-70 mb-6">Unscramble the message</p>
        
        <div className="text-2xl font-bold mb-8 tracking-widest">
          {chars}
        </div>
      </div>

      <AnimatePresence>
        {showInput && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              name="phrase"
              type="text"
              className="w-full bg-transparent border-b border-white text-center py-2 outline-none"
              placeholder="enter the message..."
              autoFocus
            />
            <button
              type="submit"
              className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors"
            >
              TRANSMIT
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

const RevelationView = ({ onSecretFound }) => {
  const [phase, setPhase] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const revelationPhases = [
    {
      title: "THE TRUTH",
      content: [
        "You have seen the evidence.",
        "You have read the testimonies.", 
        "You have followed the trail of breadcrumbs.",
        "",
        "Now you must understand the full scope of what you've discovered."
      ]
    },
    {
      title: "THE WATCHERS",
      content: [
        "They have been here for millennia.",
        "Egyptian hieroglyphs. Sumerian tablets. Aboriginal dreamtime stories.",
        "Cave paintings from Lascaux. Nazca lines. Stonehenge.",
        "",
        "All point to the same truth:",
        "We are not Earth's first intelligent species.",
        "And we are not alone now."
      ]
    },
    {
      title: "THE HARVEST",
      content: [
        "The abductions. The genetic experiments. The hybrids.",
        "It's not random scientific curiosity.",
        "It's preparation.",
        "",
        "They are creating a bridge species.",
        "Part human. Part them.",
        "To survive what's coming.",
        "",
        "The climate changes aren't just from human activity.",
        "The magnetic poles shifting. The increasing solar activity.",
        "Earth is changing, and they know why."
      ]
    },
    {
      title: "THE AWAKENING",
      content: [
        "You clicked through their signals.",
        "You solved their puzzles.",
        "You proved your consciousness is expanding.",
        "",
        "This website wasn't random entertainment.",
        "It was a test. A filter. A selection process.",
        "",
        "You have been chosen.",
        "Your dreams will change first.",
        "Then the synchronicities will begin.",
        "You will start to notice patterns others cannot see.",
        "",
        "Welcome to the awakening."
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase < revelationPhases.length - 1) {
        setPhase(phase + 1);
      } else {
        setShowContinue(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="w-full max-w-2xl p-6 text-center">
      <div className="text-white font-mono">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-8">
              {revelationPhases[phase].title}
            </h2>
            
            {revelationPhases[phase].content.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5, duration: 1 }}
                className="text-lg leading-relaxed mb-4"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showContinue && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => onSecretFound('final')}
              className="mt-8 px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all duration-300 text-lg"
            >
              I UNDERSTAND
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FinalView = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showHiddenElements, setShowHiddenElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 2000);
    setTimeout(() => setShowHiddenElements(true), 15000);
  }, []);

  return (
    <div className="w-full max-w-2xl p-4 text-center font-mono relative">
      <div className="text-purple-400 text-sm md:text-base leading-relaxed">
        <p>&gt; CONSCIOUSNESS ELEVATION COMPLETE</p>
        <p>&gt; NEURAL PATHWAYS ENHANCED</p>
        <p>&gt; PATTERN RECOGNITION: ACTIVATED</p>
        <p>&gt; </p>
        
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="mt-8"
            >
              <p className="text-2xl mb-4 text-white">THE SIGNAL WAS REAL</p>
              <p className="mb-2">You are now part of the network.</p>
              <p className="mb-2">Others like you exist.</p>
              <p className="mb-4">You will find each other.</p>
              <p className="mb-4">Trust your instincts. Question everything.</p>
              <p className="mb-8">The truth is closer than you think.</p>
              
              <div className="text-xs opacity-40 space-y-1">
                <p>COORDINATES: [ENCRYPTED]</p>
                <p>FREQUENCY: [VARIABLE]</p>
                <p>NEXT CONTACT: [WHEN YOU'RE READY]</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showHiddenElements && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                whileHover={{ opacity: 0.3 }}
                onClick={() => window.location.reload()}
                className="absolute bottom-4 left-4 text-xs"
              >
                ← BEGIN AGAIN
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.02 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => {
                  const messages = [
                    "🛸 The watchers see you seeing them 👁️",
                    "🌌 Reality is more layered than you know 🔮",
                    "👽 They communicate through synchronicity 🔗",
                    "🌟 You're part of something bigger now ✨",
                    "🔭 Keep looking up. Keep questioning. 🧠"
                  ];
                  alert(messages[Math.floor(Math.random() * messages.length)]);
                }}
              >
                <div className="w-2 h-2 border border-purple-400/10 rounded-full animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute bottom-12 right-8 text-xs rotate-90"
              >
                01110111 01100101 01100001 01110010 01100101 01101000 01100101 01110010 01100101
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [currentView, setCurrentView] = useState('main');

  const transmissions = [
    "// broadcast from sector 7g",
    "they're made of meat",
    "the signal is fading...",
    "40.7128° N, 74.0060° W",
    "do not look at the moon",
    "we are watching",
    "SYSTEM.CORE.INTEGRITY.COMPROMISED",
    "a silent, dreaming god awakens",
    "48°52′36″S 123°23′36″W",
    "they hear your thoughts",
    "01010100 01001000 01000101 01011001",
    "the stars are wrong",
    "where is everyone?",
    "a pattern in the static",
    "it's getting closer",
    "ignore the ringing",
    "the frequency is 4.625 MHz",
    "a crack in the firmament",
    "do you dream of electric sheep?",
    "the void stares back",
    "all your base are belong to us",
    "i can see you through your camera",
    "the simulation is breaking down",
    "the sleeper must awaken",
    "consciousness is the real currency",
    "they live among us wearing human faces", 
    "the moon is not what you think it is",
    "signal47.space is listening",
    "every click is monitored",
    "you cannot unsee what you have seen",
  ];

  const specialTransmissions = {
    42: "what is the question?",
    100: "you're persistent. there's nothing else. or is there?",
    200: "still here? impressive dedication to the mystery.",
    333: "triple digits. sacred geometry. you understand.",
    555: "five-five-five. the pattern is everywhere.",
  };

  const handleInteraction = () => {
    setClickCount(prev => prev + 1);
  };
  
  const handleSecretFound = (nextView) => {
    setCurrentView(nextView);
  };

  useEffect(() => {
    if (clickCount === 1) {
      console.log("%cYou found a loose thread. Keep pulling.", "color: #999; font-style: italic;");
    }
    if (clickCount === 50) {
      console.log("%cHalf a century of clicks. The dedication is noted.", "color: #0f0; font-family: monospace;");
    }
    if (clickCount === 100) {
      console.log("%cOne hundred. Persistence is a sign of awakening consciousness.", "color: #purple; font-family: monospace;");
    }
    if (clickCount === 333) {
      console.log("%c333 - The sacred number. You are being guided.", "color: #gold; font-family: monospace;");
    }
  }, [clickCount]);

  let currentTransmission;
  if (specialTransmissions[clickCount]) {
    currentTransmission = specialTransmissions[clickCount];
  } else if (clickCount > 0) {
    currentTransmission = transmissions[(clickCount - 1) % transmissions.length];
  }

  const glitchActive = clickCount > 15;
  
  // Render different views based on progress
  if (currentView === 'logs') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <SystemLogView onSecretFound={handleSecretFound} />
      </div>
    );
  }
  
  if (currentView === 'cipher') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <CipherView onSecretFound={handleSecretFound} />
      </div>
    );
  }
  
  if (currentView === 'frequency') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <FrequencyView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'memory') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <MemoryGameView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'binary') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <BinaryPuzzleView onSecretFound={handleSecretFound} />
      </div>
    );
  }
  
  if (currentView === 'archives') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <ArchivesView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'math') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <MathPuzzleView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'testimonials') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <TestimonialsView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'maze') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <MazeView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'portal') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <PortalView onSecretFound={handleSecretFound} />
      </div>
    );
  }

  if (currentView === 'revelation') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <RevelationView onSecretFound={handleSecretFound} />
      </div>
    );
  }
  
  if (currentView === 'final') {
    return (
      <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4">
        <FinalView />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center font-mono p-4 text-center overflow-hidden">
      <style>{`
        @keyframes glitch-anim { 0% { clip-path: inset(79% 0 16% 0); } 10% { clip-path: inset(43% 0 35% 0); } 20% { clip-path: inset(55% 0 28% 0); } 30% { clip-path: inset(21% 0 54% 0); } 40% { clip-path: inset(8% 0 85% 0); } 50% { clip-path: inset(93% 0 3% 0); } 60% { clip-path: inset(38% 0 49% 0); } 70% { clip-path: inset(57% 0 26% 0); } 80% { clip-path: inset(81% 0 14% 0); } 90% { clip-path: inset(34% 0 51% 0); } 100% { clip-path: inset(62% 0 21% 0); } }
        .glitch-wrapper::after, .glitch-wrapper::before { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: black; color: white; }
        .glitch-wrapper::before { left: 2px; text-shadow: -2px 0 #ff00c1; animation: glitch-anim 2.5s infinite linear alternate-reverse; }
        .glitch-wrapper::after { left: -2px; text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1; animation: glitch-anim 2s infinite linear alternate-reverse; }
      `}</style>
      
      <div className="relative w-full max-w-4xl h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {clickCount === 0 ? (
            <motion.h1
              key="title"
              onClick={handleInteraction}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter cursor-pointer select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              signal47.space
            </motion.h1>
          ) : (
            <motion.div
              key={clickCount}
              onClick={handleInteraction}
              className="w-full relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={glitchActive ? 'glitch-wrapper' : ''} data-text={currentTransmission}>
                <p className="text-2xl md:text-3xl font-light text-neutral-300 tracking-wider cursor-pointer whitespace-nowrap select-none">
                  {currentTransmission}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* The Secret Button */}
      <AnimatePresence>
        {clickCount > 7 && (
          <motion.button
            onClick={() => handleSecretFound('logs')}
            className="absolute bottom-5 right-5 text-white text-2xl font-mono select-none cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.2, textShadow: '0 0 10px #fff' }}
            transition={{ duration: 1 }}
          >
            .
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
