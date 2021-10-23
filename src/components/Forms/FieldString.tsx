import React from "react"

export const FieldString = ({
  type,
  name,
  value,
  errors,
  _touched,
  label,
  onChange,
}: {
  type: string
  name: string
  value: any
  errors: any
  _touched: any
  label: string
  onChange: () => void
}) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label htmlFor={`string-${name}`} className="label">
          {label}
        </label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <input
              id={`string-${name}`}
              className="input string-input"
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
            <p className="field-help field-">{errors[name]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
