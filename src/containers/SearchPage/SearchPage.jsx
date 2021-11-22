import styles from './SearchPage.module.css'
import { useEffect, useState, useCallback } from 'react';
import { fGetApiResours } from '../../utils/network'
import { API_SEARCH } from '../../constants/api'
import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';
import { debounce } from 'lodash'
import UiInput from '../../components/UI/UiInput/UiInput';


const SearchPage = ({ setErrorApi }) => {
    const [people, setPeople] = useState([])
    const [inputSearchValue, setInputSearchValue] = useState('')

    //Функция поиск в Api
    const getResponse = async param => {
        console.log(param)
        const res = await fGetApiResours(API_SEARCH+param)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img,
                }
            })

            setPeople(peopleList);

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse('')
    },[])

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 1000),
        []
    )


    const handleInputChange = (value) => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}><h1>SearchPage</h1></div>
            <div className={styles.search}>

                <UiInput
                    value={inputSearchValue}
                    handleInputChange={handleInputChange}
                    classes={styles.input_search}
                />
            </div>
            <div className={styles.searchList_container}>
                <div className={styles.searchList}> 
                    <div className={styles.searchList__item}>
                        <SearchPageInfo people={people}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default withErrorApi(SearchPage);