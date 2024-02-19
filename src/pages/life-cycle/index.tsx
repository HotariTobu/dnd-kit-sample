import QuickStart from '../quick-start';

export default () => {
  const handlers = [
    'onDragStart',
    'onDragMove',
    'onDragOver',
    'onDragEnd',
    'onDragCancel',
  ].map(name => (
    [name, (event: unknown) => console.log(name, event)]
  ))


  return (
    <>
      <div>life cycle</div>
      <QuickStart {...Object.fromEntries(handlers)} />
    </>
  )
}
