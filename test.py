import numpy as np
from matplotlib import pyplot as plt
from stackedBarGraph import StackedBarGrapher
SBG = StackedBarGrapher()

d = np.array([[101.,0.,0.,0.,0.,0.,0.],
              [92.,3.,0.,4.,5.,6.,0.],
              [56.,7.,8.,9.,23.,4.,5.],
              [81.,2.,4.,5.,32.,33.,4.],
              [0.,45.,2.,3.,45.,67.,8.],
              [99.,5.,0.,0.,0.,43.,56.]])

d_widths = [.5,.5,.5,.5,.5,.5]
d_labels = ["fred","julie","sam","peter","rob","baz"]
d_colors = ['#2166ac', '#fee090', '#fdbb84', '#fc8d59', '#e34a33', '#b30000', '#777777']
fig = plt.figure()

ax = fig.add_subplot(111)
SBG.stackedBarPlot(ax,
                   d,
                   d_colors,
                   xLabels=d_labels,
                   yTicks=7,
                   widths=d_widths,
                   scale=True,
                   gap = 1
                  )
plt.title("Scaled bars with set widths")

fig.subplots_adjust(bottom=0.4)
plt.tight_layout()
plt.show()
plt.close(fig)
del fig