import Rc from 'react-native';

export const Text = (props) =>
{
  props = {...props};
  if (props.style == null) props.style = {};
  props.style.color = 'lime';
  props.style.fontSize = 50;
  return <Rc.Text {...props} />;
}

export const View = (props) =>
{
  props = {...props};
  if (props.style == null) props.style = {};
  if ( ! props.style.padding)
    props.style.padding = 10;
  return <Rc.View {...props} />;
}
