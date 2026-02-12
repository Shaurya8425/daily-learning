import { useEffect, useRef, useState } from "react";
import "./dropdown.css";

export default function Dropdown({
  label,
  value,
  options = [],
  onChange,
  placeholder = "Select...",
  renderValue,
  renderOption,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className='dd-wrapper' ref={wrapperRef}>
      {label && <label className='dd-label'>{label}</label>}

      {/* Trigger */}
      <button
        type='button'
        className='dd-trigger'
        onClick={() => setOpen((p) => !p)}
      >
        <div className='dd-trigger-left'>
          {value ? (
            renderValue ? (
              renderValue(value)
            ) : (
              <span>{value.label ?? String(value)}</span>
            )
          ) : (
            <span className='dd-placeholder'>{placeholder}</span>
          )}
        </div>

        <span className={`dd-arrow ${open ? "open" : ""}`}>▾</span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className='dd-panel'>
          {options.map((opt) => (
            <div
              key={opt.id ?? opt.value ?? opt.code ?? opt.name}
              className='dd-option'
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {renderOption ? renderOption(opt) : <span>{opt.label}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
