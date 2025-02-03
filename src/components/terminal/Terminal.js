import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Terminal as TerminalIcon, ChevronRight, X } from 'lucide-react';

function Terminal({ onNavigate, onClose }) {
  const [commands, setCommands] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
  const [showWelcome, setShowWelcome] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const sections = useMemo(() => ({
    home: { name: 'Home', path: '~' },
    overview: { name: 'Overview', path: '~/overview' },
    projects: { name: 'Projects', path: '~/projects' },
    resume: { name: 'Resume', path: '~/resume' },
    contact: { name: 'Contact', path: '~/contact' },
  }), []);

  const getTimestamp = useCallback(() => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }, []);

  const handleCommand = useCallback(
    (input) => {
      const args = input.trim().split(' ');
      const command = args[0].toLowerCase();

      let output = '';
      let isError = false;

      switch (command) {
        case 'help':
          output = (
            <div className="space-y-2 animate-fade-in">
              <p className="text-green-400 font-semibold mb-2 typing-effect">
                Available Commands:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { cmd: 'cd [section]', desc: 'Navigate to a section' },
                  { cmd: 'ls', desc: 'List available sections' },
                  { cmd: 'pwd', desc: 'Print current section' },
                  { cmd: 'clear', desc: 'Clear terminal' },
                  { cmd: 'help', desc: 'Show this help message' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 hover:bg-gray-700/30 p-2 rounded transition-colors command-item"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <code className="text-purple-400 min-w-[100px]">{item.cmd}</code>
                    <span className="text-gray-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          );
          break;

        case 'ls':
          output = (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {Object.keys(sections).map((key, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 p-2 bg-gray-700/20 rounded hover:bg-gray-700/30 transition-colors directory-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{key}</span>
                </div>
              ))}
            </div>
          );
          break;

        case 'pwd':
          output = (
            <div className="text-yellow-400 font-mono mt-2 typing-effect">
              {currentPath}
            </div>
          );
          break;

        case 'cd': {
          const target = args[1]?.toLowerCase();
          if (target === '~' || target === 'home') {
            setCurrentPath('~');
            output = (
              <div className="text-green-400 mt-2 typing-effect">
                Changed directory to Home
              </div>
            );
            if (onNavigate) onNavigate('home');
          } else if (target && sections[target]) {
            setCurrentPath(sections[target].path);
            output = (
              <div className="text-green-400 mt-2 typing-effect">
                Changed directory to {sections[target].name}
              </div>
            );
            if (onNavigate) onNavigate(target);
          } else {
            output = (
              <div className="text-red-400 mt-2 typing-effect">
                Section not found: {target}
              </div>
            );
            isError = true;
          }
          break;
        }

        case 'clear':
          setCommands([]);
          setShowWelcome(false);
          return;

        default:
          output = (
            <div className="text-red-400 mt-2 typing-effect">
              Command not found: {command}
            </div>
          );
          isError = true;
      }

      setCommands((prev) => [
        ...prev,
        {
          input,
          output,
          isError,
          timestamp: getTimestamp(),
        },
      ]);
    },
    [sections, currentPath, getTimestamp, onNavigate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    handleCommand(currentInput);
    setCurrentInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    handleCommand('help');
  }, [handleCommand]);

  return (
    <div className="w-full h-full bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-gray-700/50 flex flex-col">
      <div className="bg-gray-700/50 px-4 py-3 flex items-center justify-between border-b border-gray-600/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-600 transition-colors" />
          </div>
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-gray-400" />
            <span className="text-gray-300">Terminal</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-400 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar"
      >
        {showWelcome && (
          <div className="welcome-message mb-4 p-4 text-center bg-gray-700/20 rounded-lg animate-fade-in">
            <h1 className="text-lg font-bold text-green-400 mb-2 typing-effect">
              Welcome to Rasad's Terminal!
            </h1>
            <p className="text-gray-400 mb-2">
              Type 'help' to see available commands
            </p>
          </div>
        )}

        {commands.map((cmd, i) => (
          <div key={i} className="command-block mb-4 group animate-slide-up">
            <div className="flex items-center gap-2 text-sm command-prompt">
              <span className="text-gray-500 text-xs">{cmd.timestamp}</span>
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">{currentPath}</span>
              <span className="text-white group-hover:text-green-300 transition-colors">
                {cmd.input}
              </span>
            </div>
            <div className={`ml-4 mt-2 ${cmd.isError ? 'text-red-400' : 'text-gray-300'}`}>
              {cmd.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">{currentPath}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
