import React from "react"

export const FieldChoice = ({
  name,
  options,
  _value,
  _errors,
  _touched,
  onChange,
}: {
  name: string
  options: string[]
  value: string
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
                {console.log(options)}
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
