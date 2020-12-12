import React from 'react'
import Card from './Card'
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });


const Blog = () => {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
    return (
        <>

            <div className="container-fluid nav_bg mt-5 mb-0">
                <div className="row">
                    <div className="col-8 mx-auto ">
                        <nav class="navbar navbar-expand-lg ">

                            <div class="collapse navbar-collapse blog_link" id="navbarNavAltMarkup">
                                <Paper className={classes.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="none"
                                        textColor="primary"
                                        centered
                                    >

                                        <Tab label="Business" href='/Blog' />
                                        <Tab label="Tech"  href='/Tech'/>
                                        <Tab label="Interview"  href='/Interview'/>

                                    </Tabs>
                                </Paper>
                            </div>
                        </nav>


                    </div>
                </div>
                <Post>
                    <Card />

                </Post>
            </div>
        </>
    )
}
export default Blog 