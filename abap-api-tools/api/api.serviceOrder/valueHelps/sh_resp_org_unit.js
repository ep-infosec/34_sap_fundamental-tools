// SH RESP_ORG_UNIT Organization Responsible : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Organization Responsible";

const selectParams = [
  {
    FIELDNAME: "OTYPE",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "POT"
  },
  {
    FIELDNAME: "OBJID",
    DATATYPE: "NUMC",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "PON"
  },
  {
    FIELDNAME: "STEXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];