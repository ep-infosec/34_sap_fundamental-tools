// SH FSHH_MG_ATTRIBUTE2 Fashion Information Field: 2 : abap 2.3.1 at: 2021-07-08 19:01:17

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

const title = "Fashion Information Field: 2";

const selectParams = [
  {
    FIELDNAME: "ATTRIBUTE_2",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ATTRIBUTE2_TEXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];