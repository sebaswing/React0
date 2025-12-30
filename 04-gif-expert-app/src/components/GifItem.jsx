import PropTypes from 'prop-types'; 

export const GifItem = ({title,url,id}) => {
    // console.log(title,url)
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

/*Tarea
1. añadir prop types --> yarn add
  a. title obligatorio
  b. url obligatorio
2. añadir default props
*/


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

GifItem.defaultProps = {
    title: 'no existe un titulo',
    url: 'no existe una url valida'
}