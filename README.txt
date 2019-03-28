PHÂN LỚP LÚA TẠI ĐỒNG BẰNG SÔNG HỒNG SỬ DỤNG CÁC THUẬT TOÁN HỌC MÁY

  1. Tổng quan
  2. Khái niệm
    2.1 Chỉ số NDVI (Normalized Difference Vegetation Index):
      Dùng để định lượng thảm thực vật bằng cách tính toán độ chênh lệch giữa 2 loại tia hồng ngoại (thực vật phản xạ mạnh) và tia sáng đỏ (thực vật hấp thụ)
      Chỉ số NDVI dao động từ -1 đến +1. Khác nhau với từng loại đất
      Ví dụ: Khi ta có chỉ số âm, đó khả năng cao là Nước. Ngược lại, khi ta có chỉ số NDVI gần bằng +!, đó khả năng cao là sự dày đặc các mặt của lá cây xanh. Nhưng khi NDVI xấp xỉ 0, đó không phải là lá cây mà có thể là khu vực dân cư.
      
      NDVI = (NIR - RED) / (NIR + RED)


Map Paddy rice planting area base on classification algorithms and data sources:
  + Using 2 ways: optical- and microwave-based remote sensed data.
    In classification:  Divide into unsupervised classification and supervised classificastion methods. Knowledge- and phenology-based approaches are methods in supervised classificaion.
    In term of optical remote sensing: Use MODIS and Landsat datasets, to extract paddy rice extent, 
      In addition, the indexes such as:
        - Land Surface Water Index (LSWI)
        - Enhanced Vegetative Index (EVI)
        - Normalized Difference Vegetation Index (NDVI)
    
    Microwave-based remote sensing: working in all weather conditions regardless of daylight level. Major datasets include RADARSAT, PALSAR and ENVISAT
    
    Limitation:
      - Cloudy sky, MODIS has difficulty in providing sufficient numbers of good-quality observations in moist tropical area. Saptial resolution of MODIS (<250m) is insufficient for determining the detail paddy rice extent
      - Synthetic aperture radar (SAR) using radar are less affected by cloud and illumination conditions, but its availability and cost have limited it
      - Difficult and complex to classificated rice extent because the phenological characteristics of paddy rice.
      - Redundancy of remotely sensed data. Because the information in some growth stages is not helpful in improving classification accuracy
      
      METHOD:
        1. Use S1A to reduce the influence of data redundancy and weather conditions that allows for the possibility of using unsupervised classification method to precisely extract padding rice
        2. Early, middle and late crop informations use unsupervised classification based on the enhanced paddy rice data
        3. Cropland information was extracted from Landsat-8 data, it was helpful for improving the accuracy of paddy rice extracttion
        
        
  Materials and Methods:
    + Study Area:
      Near Hong River *** MORE ***
    +Sentinel-1A: Use S1A IW Level 1 ground range detected and high resolution product, with VH polarization (more sensitive to paddy rice growth than VV-polarized backscatter.
      Pre-processing of S1A image: Use Sentinel Application Platform (SNAP), 5 main steps of workflow
          1. S1A images were corrected using orbit files
          2. S1A images were radiometrically calibrated to output σ◦ bands *** MORE ***
          3. Sigma zero (σ◦) bands were orthorectified using the Range DopplerTerrain Correction algorithm with Shuttle Radar Topography Mission Digital Elevation Model *** MORE ***
          4. The backscattering coefficient (in dB) was acquired from the orthorectified σ◦ band according to the equation 10×log10(σ◦) *** MORE ***
          5. A median filter with a window size of 5×5 pixels was utilized toremove speckle noises *** MORE ***
 
	+Landsat-8:
	  Pre-processing: 
		  1. The images were calibrated to at-sensor radiance images, then corrected to surface reflectance images using the Fast Line-of-sight Atmospheric Analysis of Hypercuble (FLAASH) on ENVI software.
		  2. Geometric pixel-to-pixl precision correction was implement based on S1A data using the georeferencing model of ArcGiS software
		  3. Done with all images were cropped
		  
  *** The error matrix of estimated area proportion ***:
	