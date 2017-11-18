export const genderOptions = [{
  label: 'It doesnt matter',
  value: 'everyone'
},{
  label: 'Males',
  value: 'male'
},{
  label: 'Females',
  value: 'female'
}];

export const ageOptions = [{
  label: 'Less than 18',
  value: {
    min: null,
    max: 18
  }
},{
  label: 'Between 19 - 25',
  value: {
    min: 19,
    max: 25
  }
},{
  label: 'Between 26 - 35',
  value: {
    min: 26,
    max: 35
  }
},{
  label: 'Between 36 - 49',
  value: {
    min: 36,
    max: 49
  }
},{
  label: 'More than 50',
  value: {
    min: 50,
    max: null
  }
}, {
  label: 'All',
  value: {
    min: 0,
    max: null
  }
}];