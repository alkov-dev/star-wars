import styles from './PersonPage.module.css'
import { fGetApiResours } from '../../utils/network';
import { useParams } from 'react-router-dom';
import  {useEffect, useState, Suspense} from 'react'
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import React from 'react'
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '@components/UI/UiLoading/UiLoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const { id } = useParams();

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async () => {
            const res = await fGetApiResours(`${API_PERSON}/${id}/`)
            // console.log(`${API_PERSON}/${id}/`, res)
            //если есть ставим значение true, если нет то false
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id)

            if (res) {
                //передаем массив данных из полученного массива
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])

                setPersonName(res.name)
                // console.log('films', res.films);
                
                res.films.length && setPersonFilms(res.films)

                

                // res.films
                setPersonPhoto(getPeopleImage(id))

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }


        })()//асинхронная самовызывающая функция
    },[])


    


    // const id = key
    return (
        <div className={styles.container}>
            <PersonLinkBack/>
            <div className={styles.wrapper}> 
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container__item}>
                    <PersonPhoto 
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}
               
                    {personFilms && (
                        <Suspense fallback={<UiLoading/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    ) } 
                    <UiLoading 
                        theme = "blue"
                        isShadow = "true"
                        classes 
                    />   
                </div>
            </div>
        </div>
    );
};

export default withErrorApi(PersonPage);
