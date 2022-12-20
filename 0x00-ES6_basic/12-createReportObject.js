/* eslint-disable */
export default function createReportObject(employeesList) {
  return {
    'allEmployees': { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
-- INSERT --                                                  1,1           All

