const React = require('react');
const Layout = require('./Layout');

function Myphoto({ photoId, photos, userAlbum }) {
  console.log(photos);
  return (
    <Layout title="Main" username={userAlbum.firstname}>
      <form
        action={`/album/${photoId}`}
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="photo" />
        <input type="text" name="comment" />
        <button>Upload pic</button>
      </form>
      <div className="Foto">
        {photos.map((el) => (
          <div className="albumCard" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{el.comment}</h5>
              {/* <a href={el.addres} className="card-link">
                MyPhoto
              </a> */}
              <button
                
                id={el.id}
                type="button"
                className="btn btn-danger deleteFoto"
              >
                Удалить фото!
              </button>
              <img src={`${el.addres}`} alt="" className='pic'/>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Myphoto;