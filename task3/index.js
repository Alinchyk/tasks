const obj = {
  'Overall,_how_satisfied_were_you_with_our_service?': 'Very_Satisfied',
  'Would_you_use_our_service_again?': 'Probably_Not',
  'Would_you_recommend_us_to_a_friend?': 'Probably',
};

const fnA = function (obj) {
  const entries = Object.entries(obj);

  // return entries.map(([title, value]) => {
  //   return { title: title.replace(/_/g, ' '), value: value.replace(/_/g, ' ') };
  // });

  return entries.reduce((acc, [title, value]) => {
    acc.push({ title: title.replace(/_/g, ' '), value: value.replace(/_/g, ' ') });
    return acc;
  }, []);
};

console.log(fnA(obj));
// [
//    { title: "Overall, how satisfied were you with our service?, value: "Very Satisfied"},
//    { title: "Would you use our service again?", value: "Probably Not"},
//    { title: "Would you recommend us to a friend?", value: "Probably"}
// ]
