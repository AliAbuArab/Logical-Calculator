//  -------------------------------------------------
// * Copyright by Salam Aslah & Ali Abu Arab (2018) *
//  -------------------------------------------------

// ------------------------------------------------------------
// GLOBAL VARIABLES
// ------------------------------------------------------------
const EOF = '$';  // End of formula
const OPEN_PARENTHESES = '(';
const CLOSE_PARENTHESES = ')';
const parentheses = [OPEN_PARENTHESES, CLOSE_PARENTHESES];
const NOT = '¬';
const IMPLIES = '→';
const AND = '∧';
const OR = '∨'
const TRUE = 'T';
const FALSE = 'F'
const CNF_FORMAT = 0;
const DNF_FORMAT = 1;
const operators = [NOT, IMPLIES, AND, OR];
const concludeOperators = ['⊣⊢', '⊨'];
const input = document.getElementById('input');
const errorMsg = document.getElementById('error');
const operatorButtons = document.getElementById('operatorButtons');
const truthTableDiv = document.getElementById('truthTableDiv');