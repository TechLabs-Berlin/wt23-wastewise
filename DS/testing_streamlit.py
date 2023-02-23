import streamlit as st
import pandas as pd
import numpy as np
import altair as alt

source= pd.read_csv('new_bycountry.csv')

# -- Create three columns to put tittle in the middle
col1, col2, col3 = st.columns([5, 5, 20])
# -- Put the image in the middle column
# - Commented out here so that the file will run without having the image downloaded
# with col2:
# st.image("streamlit.png", width=200)
# -- Put the title in the last column
with col3:
    st.title("Waste produced")
# -- We use the first column here as a dummy to add a space to the left

year_col, continent_col, log_x_col = st.columns([5, 5, 5])

#"Waste by continent"

#with continent_col:
    #continent_choice = st.selectbox(
        #"What continent would you like to look at?",
        #("All", "Asia", "Europe", "Africa", "North America", "South America","Oceania"),
    #)

#testing

#trying FILTERs to do buttons, it worked run again if the other doesn't work

subset_data = source
with continent_col:
    continents_name_input = st.multiselect(
    'Continents',
    source.groupby('continents').count().reset_index()['continents'].tolist())
    #by country name

if len(continents_name_input) > 0:
    subset_data = source[source['continents'].isin(continents_name_input)]


#checking another filter, that didn't work
# -- Get the user input


#with continents:
    #continents= st.selectbox(
        #"What continent would you like to look at?",
        #("All", "Asia", "Europe", "Africa", "North America", "Oceania", "South America"),
    #)


# -- Apply the continent filter
#if continents!= "All":
    #filtered_df = filtered_df[filtered_df.continents == continents]

#This is the code that create the graph
bar_chart = alt.Chart(subset_data).mark_bar().encode(
y='organic_food_percent:Q',
x='continents:O',
)

st.altair_chart(bar_chart, use_container_width=True)
