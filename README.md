# Purpose of this app 

Trying to create a basic Tetris app (barebone), then uses Neural Networks/Machine Learning to create a bot to play tetris for you!



### Note
NES Tetris
- 60FPS
- lv 0 gravity 48frames per cell (800ms per cell)
- Soft Drop 2 Frames per cell (~33ms per cell)

|lv|frames|ms|
|:---:|:---:|:---:|
|0|48|800|
|1|43|716.67|
|2|38|633.33| 
|3|33|550|
|4|28|466.67|
|5|23|383.33|
|6|18|300|
|7|13|216.67|
|8|8|133.33|
|9|6|100|
|10–12|5|83.33|
|13–15|4|66.67|
|16–18|3|50|
|19–28|2|33.33|
|29+|1|16.67|

#### Logic of DAS
On press 

- Pieces Move
- Counter = 0 

Hold - each frame, counter +1
When Count = 16, set counter to 10 and move
