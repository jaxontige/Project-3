# Project-3

### Overview

The group started with the intention of only using the Rental Housing Finance Survey dataset provided by the US Census. However, for at least two of our areas of inquiry, we found the data available in this dataset to be insufficient. For those 2 areas of inquiry -- the effect of number of bedrooms and the effect of mortgage rates on rental prices -- we went outside this dataset to grab data from zillow, FreddieMac, and other similar sources listed in our final presentation.

### Rent range by location and rental size. 

Data: https://www.huduser.gov/portal/datasets/fmr.html#documents_2024
Zip/Coordinates: https://download.geonames.org/export/zip/

The data allowed me to analyze studio, 1, 2, 3 and 4 bedroom rental pricing based on city/zipcode
This presented some interesting challenges while wrangling in Python. I knew I could map off of coordinates, but not postal code. So I found some modules and APIs to help me do this. 
These were "Cartopy" and the "Geocode" modules/API's to help me convert zip codes to coordinates and then plot them on a map.
Initially, I wrote a for loop that would look at each zip code on each line of data, and request the coordinates based on the zip code. The problem was that it was running about 100 rows per minute, and there were 30,000 rows. I knew this would not be practical so I started working on a fix in while it ran in the background.

I came across documentation in the form of a .txt that contained zip codes AND a column for latitude and longitude. I imported the txt as a CSV and was then able to merge by zip code with my data set. Cartopy is what I used to plot the heat map visualizations. Both Cartopy and the geocode module I used were new and fun to learn about.

As far as sources, it took me several hours of trouble shooting to get everything working properly. Here are a few of those sources: 
https://github.com/dwdii/HudFmrDataAnalyzer/blob/master/Project/project_hudfmr.py
https://www.geeksforgeeks.org/get-the-city-state-and-country-names-from-latitude-and-longitude-using-python/
https://stackoverflow.com/questions/13686001/python-module-for-getting-latitude-and-longitude-from-the-name-of-a-us-city
https://stackoverflow.com/questions/26276769/python-geopy-install
https://geocoder.readthedocs.io/providers/GeoNames.html
https://geopy.readthedocs.io/en/stable/#installation
https://pandas.pydata.org/docs/reference/api/pandas.Series.str.split.html
https://stackoverflow.com/questions/71903795/using-a-for-loop-to-make-a-cartopy-plot-of-lines-from-different-latitude-and-lon
Chat GPT



### The effect of lease length on rental rates

UofU-VIRT-DATA-PT-10-2023-U-LOLC: 05-Data-Visualization Folder 1: Activities: 07, 08, 09, 11, 13 Folder 2: Activities: 02, 04, 10 04-Data-Analysis-Pandas Folder 1: Activities: 05, 07, 08

https://www.w3schools.com/python/pandas/ref_df_mul.asp - .mul method to multiply two values

circle graph:

https://docs.python.org/3/library/math.html - using the math library to multiply row values to create new list
https://www.geeksforgeeks.org/how-to-draw-a-circle-using-matplotlib-in-python/
linear regression model:

https://seaborn.pydata.org/examples/regression_marginals.html
https://seaborn.pydata.org/tutorial/regression.html
violin plot:

https://www.geeksforgeeks.org/violinplot-using-seaborn-in-python/
https://seaborn.pydata.org/generated/seaborn.violinplot.html
Understanding more about what a violin plot can offer compared to a box plot: https://plotly.com/python/violin/
bar chart:

https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.bar.html
STACKED BAR CHART: https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_stacked.html#sphx-glr-gallery-lines-bars-and-markers-bar-stacked-py
https://www.statology.org/pandas-stacked-bar-chart/#:~:text=You%20can%20use%20the%20following%20basic%20syntax%20to,stacked%20bar%20chart%20in%20pandas%3A%20df.groupby%28%5B%27var1%27%2C%20%27var2%27%5D%29.size%28%29.unstack%28%29.plot%28kind%3D%27bar%27%2C%20stacked%3DTrue%29

### The effect of mortgage rates on rental prices

In this section analyzing the correlation between rental rates and mortgage rates, I utilized two distinct datasets sourced from Zillow and Fannie Mae. Through thorough examination, I uncovered a notable correlation across various cities, indicating that as mortgage rates surged, so did rental rates. However, amidst the analysis, it became apparent that the tumultuous effects of the COVID-19 pandemic might have obscured the true nature of this relationship, as other confounding factors could have influenced fluctuations in both rates and rents during this period.

PMMS_DATA = https://www.freddiemac.com/pmms/pmms_archives
ZILLOW = https://www.zillow.com/research/data/

### The effect of utility and amenity inclusion and exclusion on rental prices

For Utilities (identified as Electric, Gas, Water, and Sewer) and Amenities (defined as Cable, Wifi, Pool, and Parking) the data provided information regarding the number of units, within certain rental price ranges, that included or excluded a given utility or amenity in the price of rent. The data required a lot of transformation, including weighting as provided by the Census Bureau, and more to be workable. 

I ended up collapsing several small rental price ranges into larger ranges to move from 27 different price ranges down to 10. 

Ideally, I will do a T-test, which will allow some sort of conclusion regarding whether inclusion of these extras actually is correlated to a higher rental rate in a statstically significant way. The issue here is that I would need to make assumption about where a given property or rental unit falls within a very large rental price range. 

I created an interactive visualization that can be found in the files on the branch called "James".
