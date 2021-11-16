import React from "react"

export const FieldChoice = ({
  values,
  label,
  name,
  options,
  value,
  errors,
  _touched,
  onChange,
  onBlur,
}: {
  values: any
  label: string
  name: string
  options: any
  value: string
  errors: string[]
  _touched: any
  onChange: () => void
  onBlur: any
}) => {
  return (
    <div className="field ">
      <div className="field-label is-normal">
        <label htmlFor={`choice-${name}`} className="label has-text-left">
          {label}
        </label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select
                id={`choice-${name}`}
                defaultValue={value}
                className="choice-input"
                onChange={onChange}
                onBlur={() => onBlur(values)}
                name={name}
              >
                {options.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="field-help field-">{errors[name]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
