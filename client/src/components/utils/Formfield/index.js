import React from 'react';
/**
   * @desc this class will return FormField component
   * @param {string} id - Field name defined in state.formData
   * @example id='email';
   *  state = {
    formdata: {
      email: {
        element: 'input',
        value: '',
        valid: false,
        touched: false,
        validationMessage: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
      }
    }
  };
  * @param {object} formdata is Field values of state.formData
  * @param {function} change - will send the event and id of changed field
  * @return jsx - form field
  */
export default ({formdata, change, id}) => {


    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }


    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className="formBlock">
                        { formdata.showlabel ? 
                            <div className="label_inputs">{formdata.config.label}</div>
                        :null}

                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=> change({event,id,blur:true})}
                            onChange={(event)=> change({event,id}) }
                        />
                        {showError()}
                    </div>
                )
            break;
            case('select'):
                formTemplate = (
                    <div className="formBlock">
                        { formdata.showlabel ? 
                            <div className="label_inputs">{formdata.config.label}</div>
                        :null}
                        <select
                            value={formdata.value}
                            onBlur={(event)=> change({event,id,blur:true})}
                            onChange={(event)=> change({event,id}) }
                        >
                            <option value="">Select one</option>
                            {
                                formdata.config.options.map(item=>(
                                    <option 
                                        key={item.key} 
                                        value={item.key}
                                    >
                                        {item.value}
                                    </option>
                                ))
                            }
                        </select>
                        {showError()}
                    </div>
                )
            break;
            case('textarea'):
            formTemplate = (
                <div className="formBlock">
                    { formdata.showlabel ? 
                        <div className="label_inputs">{formdata.config.label}</div>
                    :null}
                    <textarea
                        {...formdata.config}
                        value={formdata.value}
                        onBlur={(event)=> change({event,id,blur:true})}
                        onChange={(event)=> change({event,id}) }
                    />
                    {showError()}
                </div>
            )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }


    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

