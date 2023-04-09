import streamlit as st
import pandas as pd
import numpy as np
import altair as alt

source= pd.read_csv('unstacked_df_v1.csv')

# -- DASHBOARD SETINGS 
#Create three columns to put tittle in the middle
col1, col2, col3 = st.columns([2, 1, 13])
#col1, col3 = st.columns([10, 20])

# -- Put the image in the middle column
# - Commented out here so that the file will run without having the image downloaded
# with col2:
# st.image("streamlit.png", width=200)
# -- Put the title in the last column
with col3:
    st.title("Waste produced 2022")
# -- We use the first column here as a dummy to add a space to the left

random_col, country_col, random_col3 = st.columns([5,10,5])

#"Waste by country"

#c1, c2 = st.columns((50,50))

#trying FILTER to do button for country

subset_data = source

with country_col:
    country_name_input = st.selectbox(
    'Country',
    source.groupby('country_name').count().reset_index()['country_name'].tolist())


if len(country_name_input) > 0:
    subset_data = source[source['country_name']==country_name_input]





#This is the code that create the graph

#with c1:
bar_chart = alt.Chart(subset_data).mark_bar().encode(
x= alt.X('type_of_waste:O',title="Type of waste", axis=alt.Axis(labelColor='black')),
y=alt.Y('percentage:Q', title='Percentage',axis=alt.Axis(labelColor='black')),
color='type_of_waste:N',
).configure(background='#FFFFFF').configure_legend(title=None)

st.altair_chart(bar_chart, use_container_width=True)


#continents

random1_col, continent_col, random2_col = st.columns((5,10,5))


source2=pd.read_csv('unstacked_df_continent.csv')

#trying FILTER to do button for continet

subset_data = source2

with continent_col:
    continent_name_input = st.selectbox(
    'Continent',
    source2.groupby('continents').count().reset_index()['continents'].tolist())


if len(continent_name_input) > 0:
    subset_data = source2[source2['continents']==continent_name_input]



#This is the code that create the graph

#with c2:
bar_chart = alt.Chart(subset_data).mark_bar().encode(
x= alt.X('type_of_waste:O',title="Type of waste", axis=alt.Axis(labelColor='black')),
y=alt.Y('percentage:Q', title='Percentage',axis=alt.Axis(labelColor='black')),
color='type_of_waste:N',
).configure(background='#FFFFFF').configure_legend(title=None)

st.altair_chart(bar_chart, use_container_width=True)






