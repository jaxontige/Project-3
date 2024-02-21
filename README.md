# Project-3

### Overview

The group started with the intention of only using the Rental Housing Finance Survey dataset provided by the US Census. However, for at least two of our areas of inquiry, we found the data available in this dataset to be insufficient. For those 2 areas of inquiry -- the effect of number of bedrooms and the effect of mortgage rates on rental prices -- we went outside this dataset to grab data from zillow, FreddieMac, and other similar sources listed in our final presentation.

### The effect of number of bedrooms on rental rates (Jaxon)


### The effect of lease length on rental rates (Jenna)

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

### The effect of mortgage rates on rental prices (Bryson)

In this section analyzing the correlation between rental rates and mortgage rates, I utilized two distinct datasets sourced from Zillow and Fannie Mae. Through thorough examination, I uncovered a notable correlation across various cities, indicating that as mortgage rates surged, so did rental rates. However, amidst the analysis, it became apparent that the tumultuous effects of the COVID-19 pandemic might have obscured the true nature of this relationship, as other confounding factors could have influenced fluctuations in both rates and rents during this period.

PMMS_DATA = https://www.freddiemac.com/pmms/pmms_archives
ZILLOW = https://www.zillow.com/research/data/

### The effect of utility and amenity inclusion and exclusion on rental prices (James)

For Utilities (identified as Electric, Gas, Water, and Sewer) and Amenities (defined as Cable, Wifi, Pool, and Parking) the data provided information regarding the number of units, within certain rental price ranges, that included or excluded a given utility or amenity in the price of rent. The data required a lot of transformation, including weighting as provided by the Census Bureau, and more to be workable. 

I ended up collapsing several small rental price ranges into larger ranges to move from 27 different price ranges down to 10. 

Ideally, I will do a T-test, which will allow some sort of conclusion regarding whether inclusion of these extras actually is correlated to a higher rental rate in a statstically significant way. The issue here is that I would need to make assumption about where a given property or rental unit falls within a very large rental price range. 

I created an interactive visualization that can be found in the files on the branch called "James".
