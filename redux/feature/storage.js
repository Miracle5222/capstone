const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
    };
  });

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewPosition: 0,
    });
  }, [index]);

{visible && (
    <Animated.View style={[styles.modalContainer, animatedStyles]}>
      <TouchableOpacity
        onPress={() => {
          setVisibility(!visible);
          visible ? (opacity.value = 0) : (opacity.value = 1);
        }}
        style={styles.exit}
      >
        <Exit />
      </TouchableOpacity>
      <Highlighter
        language="java"
        height={modalContent.length < 800 ? "auto" : 300}
      >
        {modalContent.trim()}
      </Highlighter>
    </Animated.View>
  )}
  {visible1 && (
    <Animated.View style={[styles.modalContainer, animatedStyles]}>
      <TouchableOpacity
        onPress={() => {
          setVisibility1(!visible1);
          visible1 ? (opacity.value = 0) : (opacity.value = 1);
        }}
        style={styles.exit}
      >
        <Exit />
      </TouchableOpacity>
      <Text>Hello WOrld</Text>
    </Animated.View>
  )}

  <FlatList
    ref={ref}
    initialScrollIndex={index}
    data={route.params.content}
    scrollEnabled={false}
    keyExtractor={(_, index) => index.toString()}
    horizontal
    onScrollToIndexFailed={(info) => {
      // console.log(info);
      const wait = new Promise((resolve) => setTimeout(resolve, 500));
      wait.then(() => {
        ref.current?.scrollToIndex({
          index: info.index,
          animated: true,
        });
      });
    }}
    renderItem={({ item }) => (
      <ScrollView style={styles.con}>
        <View style={styles.contentContainer}>
          <Spacer />
          <View
            style={[
              styles.boxContent,
              {
                display: item.video.length <= 0 ? "none" : "flex",
                backgroundColor: theme
                  ? lightBg.fortiary
                  : darkBg.secondary,
              },
            ]}
          >
            <YoutubeVideo id={item?.video} />
          </View>
          <Spacer />
          <View
            style={[
              styles.boxContent,
              {
                display: item?.heading.length <= 0 ? "none" : "flex",
                backgroundColor: theme
                  ? lightBg.fortiary
                  : darkBg.secondary,
              },
            ]}
          >
            <Paragraph color={theme ? text.dark : text.light} size={14}>
              {item?.heading.trim()}
            </Paragraph>
          </View>
          <Spacer />
          {item.image.map((_, index) => {
            return (
              <Image
                key={index}
                style={{
                  display: item?.image.length <= 0 ? "none" : "flex",
                  width: contentId === "2.1" ? "90%" : "100%",
                  height:
                    contentId[0] === "2"
                      ? 180
                      : 400 && contentId[0] === "4"
                      ? 180
                      : 400 && contentId[0] === "5"
                      ? 180
                      : 400 && contentId[0] === "6"
                      ? 180
                      : 400,
                }}
                resizeMode="contain"
                source={item.image[index]}
              />
            );
          })}
          {item.code.map((val, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setModalContent(val?.textCode);
                  setVisibility(!visible);
                  visible ? (opacity.value = 0) : (opacity.value = 1);
                }}
                activeOpacity={0.9}
                key={index}
                style={[
                  styles.boxContent,
                  {
                    backgroundColor: theme
                      ? lightBg.fortiary
                      : darkBg.secondary,
                  },
                ]}
              >
                <Highlighter
                  language={val?.language}
                  height={val?.textCode.trim().length < 100 ? "auto" : 180}
                >
                  {val.textCode.trim()}
                </Highlighter>
              </TouchableOpacity>
            );
          })}
          <Spacer />
          <View
            style={[
              styles.boxContent,
              {
                display: item.paragraph.length <= 0 ? "none" : "flex",
                backgroundColor: theme
                  ? lightBg.fortiary
                  : darkBg.secondary,
              },
            ]}
          >
            <Paragraph color={theme ? text.dark : text.light} size={14}>
              {item?.paragraph.trim()}
            </Paragraph>
          </View>
          buttons
          <View style={styles.buttonContainer}>
            {index === 0 ? (
              <View></View>
            ) : (
              <Button
                event={() => {
                  if (index === 0) {
                    return;
                  }
                  setIndex(index - 1);
                  // dispatch(backHandler());
                }}
              >
                <Paragraph color={text.light} size={16}>
                  Back
                </Paragraph>
              </Button>
            )}

            <Button
              event={() => {
                if (index === route.params.content.length - 1) {
                  dispatch(moduleStatusHandler(route.params.id));
                  // dispatch(indexInitialState());
                  // storeData();
                  navigation.goBack();
                }

                // dispatch(nextHandler());
                setIndex(index + 1);
              }}
            >
              <Paragraph color={text.light} size={16}>
                Next
              </Paragraph>
            </Button>
          </View>
        </View>
        <Spacer />
      </ScrollView>
    )}
  />