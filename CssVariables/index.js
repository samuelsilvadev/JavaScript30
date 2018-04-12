(function (win, doc) {
    'use strict';
  
    const _VARIABLE_BLUR = '--blur';
    const _VARIABLE_BACKGROUND = '--background-color';
    const _VARIABLE_SPACING = '--spacing';
    const types = {
      'background': _VARIABLE_BACKGROUND,
      'blur': _VARIABLE_BLUR,
      'spacing': _VARIABLE_SPACING
      };
    const jsInputsControls = doc.querySelectorAll('[data-js="js-input-control"]');
    const handleChangeInput = function(){
      if(this === win)
        return console.error('Object "this" is appointing to windows');
          
      let valueToApply = this.value;
      const whereApply = this.dataset.type;
  
      if(whereApply !== 'background') 
        valueToApply = valueToApply + 'px';
  
        doc.documentElement.style.setProperty(types[whereApply], valueToApply);
    };
  
    jsInputsControls.forEach(input => input.addEventListener('change', handleChangeInput, false))
  
  })(window, document);
  