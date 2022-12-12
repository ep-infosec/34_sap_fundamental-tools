// SH H_TCF12 Grouping key 1 for production resources/tools : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Grouping key 1 for production resources/tools";

const selectParams = [
  {
    FIELDNAME: "FGRUA",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "FGRTXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];