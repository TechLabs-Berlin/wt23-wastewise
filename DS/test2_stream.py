import streamlit as st
import pandas as pd
import numpy as np
import altair as alt

source= pd.read_csv('new_bycountry.csv')

col1, col2, col3 = st.columns([5, 5, 20])

with col3:
    st.title("Waste produced")

year_col, continent_col, log_x_col = st.columns([5, 5, 5])

bar_chart = alt.Chart(subset_data).mark_bar().encode(
y= 'glass_percent:Q',
x='continents:O',
)

st.altair_chart(bar_chart, use_container_width=True)