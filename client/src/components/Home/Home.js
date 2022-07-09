import React , { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';;

const Home = () => {

    const [ currentId, SetCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

  return (
        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={4}>                        
                    <Grid item xs={12} sm={6}>
                    <Posts setCurrentId={SetCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId ={currentId} setCurrentId={SetCurrentId} />
                    </Grid>
               </Grid>
            </Container>
        </Grow>
  )
}

export default Home