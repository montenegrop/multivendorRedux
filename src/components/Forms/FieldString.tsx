import React from "react"

export const FieldString = ({
  type,
  name,
  value,
  errors,
  _touched,
  onChange,
}: {
  type: string
  name: string
  value: any
  errors: any
  _touched: any
  onChange: () => void
}) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label htmlFor="string-id-email" className="label">
          {name}
        </label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <input
              id="string-id-email"
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
