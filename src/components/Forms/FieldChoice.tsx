import React from "react"

export const FieldChoice = ({
  name,
  options,
  _value,
  errors,
  _touched,
  onChange,
}: {
  name: string
  options: string[]
  _value: string
  errors: string[]
  _touched: any
  onChange: () => void
}) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label htmlFor="choice-id" className="label">
          Department
        </label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select id="choice-id" className="choice-input" onBlur={onChange} name={name}>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
