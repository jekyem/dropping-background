# dropping-background

이 프로젝트는 눈이 내리는 배경을 React Component로 개발한 프로젝트 입니다.

### Drop Element 커스터 마이즈

현재 프로젝트에서는 눈(흰색 공)으로 되어있지만, 떨어지는 Component는 어떤 Copmonent든 가능합니다.
DroppingBackground를 사용할때, 떨어지기를 원하는 Component를 dropComponent의 props로 넘기면 됩니다.

```js
<DroppingBackground
...
dropComponent={<CustomComponent/>}
...
/>
```

### Animation

에니메이션은 CSS로만 동작 하도록 만들었으며, 성능을 위해 50개의 Random Keyframe를 생성하고 이 것을 돌려 사용합니다.
원하는 애니메이션을 만들기 위해선 model/DropAnimation/index.ts를 상속받아 생성하면 됩니다.

```ts
class CustomAnimation extends DropAnimation{
    ...
}
```

생성한 Animation을 적용 하기 위해서는, DroppingBackground 컴포넌트에 dropAnimation 값으로 props를 전달하면 됩니다.

```js
<DroppingBackground
...
dropAnimation={new CustomAnimation}
...
/>
```
