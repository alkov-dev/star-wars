import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fGetApiResours } from '@utils/network';
import { changeHTTP } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation/PeopleNavigation';

// import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
// import PeopleList from '../../components/PeoplePage/PeopleList';

// import styles from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(null);
    

    // console.log(prevPage)
    console.log(counterPage)

    const query = useQueryParams()
    const queryPage = query.get('page')

    // console.log(API_PEOPLE+queryPage);


    const getResource = async (url) => {
        const res = await fGetApiResours(url);
        // console.log(res);


        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                // console.log(img);
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }




    }

    useEffect(() => {
        // getResource('https://swapi.dev/api/people/?page=2');
        getResource(API_PEOPLE+queryPage);
         
    }, []);

    return (
        <>
            <PeopleNavigation 
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />

            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);


