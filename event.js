const form = document.querySelector('.register-form');

form.addEventListener('submit', event => {
  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});

// const result = _.add(2, 3);
// console.log(result);

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll handler call evenry 300ms');
//   }, 300)
// );

document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      console.log('Scroll handler call on every event stream start');
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);
