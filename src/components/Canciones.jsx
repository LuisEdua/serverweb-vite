import '../assets/styles/Canciones.css'
import Card from './Card'
function Canciones(){
    const cancion=[
        {
            img:'/Imaganes/Que prefieres.jpg',
            name: 'Cancion: Que prefieres',
            artist: 'Artista: Boza y Beele',
            info: 'Es la cancion más escuchada en spotify, en este año'
        },
        {
            img: '/Imaganes/Despechá.jpg',
            name: 'Cancion: Despechá',
            artist: 'Artista: Rosalia',
            info: 'Su lanzamiento fue una sorpresa, pues se canto en un concierto antes de ser lanzada'
        },
        {
            img:'/Imaganes/Te felicito.jpg',
            name:'Cancion: Te felicito',
            artist:'Artista: Shakira, Rauw y Alejandro',
            info:'Lanzada por shakira, acompañada por Rauw y Alejandro, habla de la infidelidad  y fue lanzada despues de la infidelidad de pique'
        },
        {
            img:'/Imaganes/Provenza.jpg',
            name:'Cancion: Provenza',
            artist:'Artista: Karol G',
            info:'Tuvo el puesto numero 1 en el top 50 por varias semanas'
        },
        {
            img:'/Imaganes/Persuasive.jpg',
            name:'Cancion: Persuasive',
            artist:'Artista: Doechi & SZA',
            info:'Es una cancion que habla de trasnochadas y drogras, se ha mantinido en una buena posicion en el top 50 a nivel mundial'
        },
        {
            img:'/Imaganes/For my hand.jpg',
            name:'Cancion: For my hand',
            artist:'Artista: Burna Boy feat Ed Sheeran',
            info:'Una cancion que habla del amor con una letra y melodia sencillas'
        },
        {
            img:'/Imaganes/Ojos marrones.jpg',
            name:'Cancion: Ojos Marrones',
            artist:'Artista: Lasso y Sebastian Yatra',
            info:'Es una cancion inspirada en no una sino en 3 historias del cantante'
        },
        {
            img:'/Imaganes/Ojala.jpg',
            name:'Cancion:Ojala',
            artist:'Artista: Maria Becerra',
            info:'Es una adios a un amante que no supo valorarla y también un himno a la libertad'
        },
        {
            img:'/Imaganes/Quiero decirte.jpg',
            name:'Cancion: Quiero decirte',
            artist:'Artista: Abraham Mateo y Ana Mena',
            info:'El nuevo sencillo con el que regresa el cantante le ha encantado a muchos incluyendo a la destinataria'
        }
    ]
    return(
        <div className='canciones'>
            {cancion.map((cancion)=>(
                <Card img={cancion.img} name={cancion.name} artist={cancion.artist} info={cancion.info}></Card>
            ))}
        </div>
    )
}
export default Canciones;