// SH SSH_T007A Tax on sales/purchases code : abap 2.3.0 at: 2021-04-23 11:59:34

const helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
const helpOption = [
  { id: 'EQ', name: 'is' },
  { id: 'NE', name: 'is not' },
  { id: 'GT', name: 'greater than' },
  { id: 'LT', name: 'less than' },
  { id: 'GE', name: 'not less' },
  { id: 'LE', name: 'not greater' },
  { id: 'BT', name: 'between' },
  { id: 'NB', name: 'not between' },
  { id: 'CP', name: 'with pattern' },
  { id: 'NP', name: 'w/o pattern' }
];

const title = "Tax on sales/purchases code";

const selectParams = [
  {
    FIELDNAME: "KALSM",
    DATATYPE: "CHAR",
    LENG: 6,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MWSKZ",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TEXT1",
    DATATYPE: "CHAR",
    LENG: 50,
    DECIMALS: 0,
  }
];