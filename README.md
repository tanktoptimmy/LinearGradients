# LinearGradients

Pass the `backgroundColour` prop as either a `string` or a `LinearGradient` object.

Pass other styles using `style` prop 

e.g. flat yellow background colour

```
<LView
    style={styles.block}
    background={"#ff0"}
>
  <Text>this is the yellow one</Text>
</LView>
```

e.g. linear background colour

```
const linearProps = {
  "start": {"x": 0.5, "y": 1},
  "end": {"x": 0.5, "y": 0},
  "colors": ["#3EC141", "#E62931"],
  "locations":[0, 1]
}

<LView
    style={styles.block}
    background= {linearProps}
>
  <Text>this is a linear</Text>
</LView>
```
