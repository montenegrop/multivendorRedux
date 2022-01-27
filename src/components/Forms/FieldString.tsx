import React, { useMemo } from "react"

export const FieldString = ({
  values,
  type,
  name,
  value,
  errors,
  _touched,
  label,
  onChange,
  onBlur,
}: {
  values: any
  type: string
  name: string
  value: any
  errors: any
  _touched: any
  label: string
  onChange: () => void
  onBlur: any
}) => {
  const DateNow = useMemo(() => {
    const data = new Date()
    const year = data.getFullYear()
    const month = data.getMonth()
    const day = data.getDay()
    return `${year}-${month < 10 ? "0" + month + 1 : month + 1}-${day < 10 ? "0" + day : day}`
  }, [])

  return (
    <div className="field">
      <div className="field-label is-normal">
        <label htmlFor={`string-${name}`} className="label has-text-left">
          {label}
        </label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            {type !== "date" && (
              <input
                id={`string-${name}`}
                className="input string-input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                /* onBlur={() => onBlur(values)} /* error aca */
              />
            )}
            {type == "date" && (
              <input
                id={`string-${name}`}
                className="input string-input"
                type={type}
                min={DateNow}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={() => onBlur(values)}
              />
            )}
            <p className="field-help field-">{errors[name]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
