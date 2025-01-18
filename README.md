# MongoDB $inc Operator Error
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations. The error arises from attempting to increment a field that either does not exist or is of an incompatible data type.
The `bug.js` file showcases the erroneous code, while `bugSolution.js` provides the corrected implementation.
## Problem
The incorrect usage of the `$inc` operator is shown in `bug.js`.  If the document does not have the `counter` field, or if the `counter` field is not a number, the operation will fail.
## Solution
The solution is to check for the existence of the counter field and to ensure that its type is correct. In `bugSolution.js`, we use a conditional update to handle the cases where the field is missing or has wrong type, and we handle the error appropriately.