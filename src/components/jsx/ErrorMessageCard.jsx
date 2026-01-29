import '../css/Error.css'
function ErrorMessageCard({ error }) {
  if (!error) return null;

  const {  message,details } = error;
  let mode = localStorage.getItem('mode')=='true' ? 'dark' : 'light';

  return (
    <div className={`card ${mode}`}>
      <h3 className={`title`}>{message}</h3>

  


      {details && (
        <p className='item'>
          {details}
        </p>
      )}
    </div>
  );
}



export default ErrorMessageCard;
