//Budget Controller
var budgetController = (function() {

})();



//UI Controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add_btn'
    };
    
    return {
      getInput: function() {
          
          return {
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value
          };
      },
        
      getDOMstrings: function() {
        return DOMstrings;
    }
    };
})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
        //Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        
        //Add the item to the budget controller
        
        
        //Add the item to the UI
        
        
        //Calculate the budget
        
        
        //Dispaly the budget on the UI      
    }
  
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); 
    
    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode===13 || event.which===13){
            ctrlAddItem();
            }
    })

})(budgetController, UIController);


