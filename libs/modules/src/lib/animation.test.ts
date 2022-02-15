import { animation } from './animation';

describe('animation', () => {
  test('ani_backwards', () =>
    expect(animation.ani_backwards()).toMatchInlineSnapshot(
      `"animation-fill-mode:backwards;"`,
    ));
  test('ani_duration_2xl', () =>
    expect(animation.ani_duration_2xl()).toMatchInlineSnapshot(
      `"animation-duration:1.2s;"`,
    ));
  test('ani_duration_3xl', () =>
    expect(animation.ani_duration_3xl()).toMatchInlineSnapshot(
      `"animation-duration:1.8s;"`,
    ));
  test('ani_duration_4xl', () =>
    expect(animation.ani_duration_4xl()).toMatchInlineSnapshot(
      `"animation-duration:2.4s;"`,
    ));
  test('ani_duration_5xl', () =>
    expect(animation.ani_duration_5xl()).toMatchInlineSnapshot(
      `"animation-duration:3s;"`,
    ));
  test('ani_duration_immediately', () =>
    expect(animation.ani_duration_immediately()).toMatchInlineSnapshot(
      `"animation-duration:0s;"`,
    ));
  test('ani_duration_lg', () =>
    expect(animation.ani_duration_lg()).toMatchInlineSnapshot(
      `"animation-duration:0.45s;"`,
    ));
  test('ani_duration_md', () =>
    expect(animation.ani_duration_md()).toMatchInlineSnapshot(
      `"animation-duration:0.3s;"`,
    ));
  test('ani_duration_quickly', () =>
    expect(animation.ani_duration_quickly()).toMatchInlineSnapshot(
      `"animation-duration:0.2s;"`,
    ));
  test('ani_duration_slowly', () =>
    expect(animation.ani_duration_slowly()).toMatchInlineSnapshot(
      `"animation-duration:0.4s;"`,
    ));
  test('ani_duration_sm', () =>
    expect(animation.ani_duration_sm()).toMatchInlineSnapshot(
      `"animation-duration:0.15s;"`,
    ));
  test('ani_duration_xl', () =>
    expect(animation.ani_duration_xl()).toMatchInlineSnapshot(
      `"animation-duration:0.6s;"`,
    ));
  test('ani_ease', () =>
    expect(animation.ani_ease()).toMatchInlineSnapshot(
      `"animation-timing-function:ease;"`,
    ));
  test('ani_ease_in', () =>
    expect(animation.ani_ease_in()).toMatchInlineSnapshot(
      `"animation-timing-function:ease-in;"`,
    ));
  test('ani_ease_in_out', () =>
    expect(animation.ani_ease_in_out()).toMatchInlineSnapshot(
      `"animation-timing-function:ease-in-out;"`,
    ));
  test('ani_ease_out', () =>
    expect(animation.ani_ease_out()).toMatchInlineSnapshot(
      `"animation-timing-function:ease-out;"`,
    ));
  test('ani_forwards', () =>
    expect(animation.ani_forwards()).toMatchInlineSnapshot(
      `"animation-fill-mode:forwards;"`,
    ));
  test('ani_iteration_1', () =>
    expect(animation.ani_iteration_1()).toMatchInlineSnapshot(
      `"animation-iteration-count:1;"`,
    ));
  test('ani_iteration_10', () =>
    expect(animation.ani_iteration_10()).toMatchInlineSnapshot(
      `"animation-iteration-count:10;"`,
    ));
  test('ani_iteration_100', () =>
    expect(animation.ani_iteration_100()).toMatchInlineSnapshot(
      `"animation-iteration-count:100;"`,
    ));
  test('ani_iteration_11', () =>
    expect(animation.ani_iteration_11()).toMatchInlineSnapshot(
      `"animation-iteration-count:11;"`,
    ));
  test('ani_iteration_12', () =>
    expect(animation.ani_iteration_12()).toMatchInlineSnapshot(
      `"animation-iteration-count:12;"`,
    ));
  test('ani_iteration_13', () =>
    expect(animation.ani_iteration_13()).toMatchInlineSnapshot(
      `"animation-iteration-count:13;"`,
    ));
  test('ani_iteration_14', () =>
    expect(animation.ani_iteration_14()).toMatchInlineSnapshot(
      `"animation-iteration-count:14;"`,
    ));
  test('ani_iteration_15', () =>
    expect(animation.ani_iteration_15()).toMatchInlineSnapshot(
      `"animation-iteration-count:15;"`,
    ));
  test('ani_iteration_16', () =>
    expect(animation.ani_iteration_16()).toMatchInlineSnapshot(
      `"animation-iteration-count:16;"`,
    ));
  test('ani_iteration_17', () =>
    expect(animation.ani_iteration_17()).toMatchInlineSnapshot(
      `"animation-iteration-count:17;"`,
    ));
  test('ani_iteration_18', () =>
    expect(animation.ani_iteration_18()).toMatchInlineSnapshot(
      `"animation-iteration-count:18;"`,
    ));
  test('ani_iteration_19', () =>
    expect(animation.ani_iteration_19()).toMatchInlineSnapshot(
      `"animation-iteration-count:19;"`,
    ));
  test('ani_iteration_2', () =>
    expect(animation.ani_iteration_2()).toMatchInlineSnapshot(
      `"animation-iteration-count:2;"`,
    ));
  test('ani_iteration_20', () =>
    expect(animation.ani_iteration_20()).toMatchInlineSnapshot(
      `"animation-iteration-count:20;"`,
    ));
  test('ani_iteration_21', () =>
    expect(animation.ani_iteration_21()).toMatchInlineSnapshot(
      `"animation-iteration-count:21;"`,
    ));
  test('ani_iteration_22', () =>
    expect(animation.ani_iteration_22()).toMatchInlineSnapshot(
      `"animation-iteration-count:22;"`,
    ));
  test('ani_iteration_23', () =>
    expect(animation.ani_iteration_23()).toMatchInlineSnapshot(
      `"animation-iteration-count:23;"`,
    ));
  test('ani_iteration_24', () =>
    expect(animation.ani_iteration_24()).toMatchInlineSnapshot(
      `"animation-iteration-count:24;"`,
    ));
  test('ani_iteration_25', () =>
    expect(animation.ani_iteration_25()).toMatchInlineSnapshot(
      `"animation-iteration-count:25;"`,
    ));
  test('ani_iteration_26', () =>
    expect(animation.ani_iteration_26()).toMatchInlineSnapshot(
      `"animation-iteration-count:26;"`,
    ));
  test('ani_iteration_27', () =>
    expect(animation.ani_iteration_27()).toMatchInlineSnapshot(
      `"animation-iteration-count:27;"`,
    ));
  test('ani_iteration_28', () =>
    expect(animation.ani_iteration_28()).toMatchInlineSnapshot(
      `"animation-iteration-count:28;"`,
    ));
  test('ani_iteration_29', () =>
    expect(animation.ani_iteration_29()).toMatchInlineSnapshot(
      `"animation-iteration-count:29;"`,
    ));
  test('ani_iteration_3', () =>
    expect(animation.ani_iteration_3()).toMatchInlineSnapshot(
      `"animation-iteration-count:3;"`,
    ));
  test('ani_iteration_30', () =>
    expect(animation.ani_iteration_30()).toMatchInlineSnapshot(
      `"animation-iteration-count:30;"`,
    ));
  test('ani_iteration_31', () =>
    expect(animation.ani_iteration_31()).toMatchInlineSnapshot(
      `"animation-iteration-count:31;"`,
    ));
  test('ani_iteration_32', () =>
    expect(animation.ani_iteration_32()).toMatchInlineSnapshot(
      `"animation-iteration-count:32;"`,
    ));
  test('ani_iteration_33', () =>
    expect(animation.ani_iteration_33()).toMatchInlineSnapshot(
      `"animation-iteration-count:33;"`,
    ));
  test('ani_iteration_34', () =>
    expect(animation.ani_iteration_34()).toMatchInlineSnapshot(
      `"animation-iteration-count:34;"`,
    ));
  test('ani_iteration_35', () =>
    expect(animation.ani_iteration_35()).toMatchInlineSnapshot(
      `"animation-iteration-count:35;"`,
    ));
  test('ani_iteration_36', () =>
    expect(animation.ani_iteration_36()).toMatchInlineSnapshot(
      `"animation-iteration-count:36;"`,
    ));
  test('ani_iteration_37', () =>
    expect(animation.ani_iteration_37()).toMatchInlineSnapshot(
      `"animation-iteration-count:37;"`,
    ));
  test('ani_iteration_38', () =>
    expect(animation.ani_iteration_38()).toMatchInlineSnapshot(
      `"animation-iteration-count:38;"`,
    ));
  test('ani_iteration_39', () =>
    expect(animation.ani_iteration_39()).toMatchInlineSnapshot(
      `"animation-iteration-count:39;"`,
    ));
  test('ani_iteration_4', () =>
    expect(animation.ani_iteration_4()).toMatchInlineSnapshot(
      `"animation-iteration-count:4;"`,
    ));
  test('ani_iteration_40', () =>
    expect(animation.ani_iteration_40()).toMatchInlineSnapshot(
      `"animation-iteration-count:40;"`,
    ));
  test('ani_iteration_41', () =>
    expect(animation.ani_iteration_41()).toMatchInlineSnapshot(
      `"animation-iteration-count:41;"`,
    ));
  test('ani_iteration_42', () =>
    expect(animation.ani_iteration_42()).toMatchInlineSnapshot(
      `"animation-iteration-count:42;"`,
    ));
  test('ani_iteration_43', () =>
    expect(animation.ani_iteration_43()).toMatchInlineSnapshot(
      `"animation-iteration-count:43;"`,
    ));
  test('ani_iteration_44', () =>
    expect(animation.ani_iteration_44()).toMatchInlineSnapshot(
      `"animation-iteration-count:44;"`,
    ));
  test('ani_iteration_45', () =>
    expect(animation.ani_iteration_45()).toMatchInlineSnapshot(
      `"animation-iteration-count:45;"`,
    ));
  test('ani_iteration_46', () =>
    expect(animation.ani_iteration_46()).toMatchInlineSnapshot(
      `"animation-iteration-count:46;"`,
    ));
  test('ani_iteration_47', () =>
    expect(animation.ani_iteration_47()).toMatchInlineSnapshot(
      `"animation-iteration-count:47;"`,
    ));
  test('ani_iteration_48', () =>
    expect(animation.ani_iteration_48()).toMatchInlineSnapshot(
      `"animation-iteration-count:48;"`,
    ));
  test('ani_iteration_49', () =>
    expect(animation.ani_iteration_49()).toMatchInlineSnapshot(
      `"animation-iteration-count:49;"`,
    ));
  test('ani_iteration_5', () =>
    expect(animation.ani_iteration_5()).toMatchInlineSnapshot(
      `"animation-iteration-count:5;"`,
    ));
  test('ani_iteration_50', () =>
    expect(animation.ani_iteration_50()).toMatchInlineSnapshot(
      `"animation-iteration-count:50;"`,
    ));
  test('ani_iteration_51', () =>
    expect(animation.ani_iteration_51()).toMatchInlineSnapshot(
      `"animation-iteration-count:51;"`,
    ));
  test('ani_iteration_52', () =>
    expect(animation.ani_iteration_52()).toMatchInlineSnapshot(
      `"animation-iteration-count:52;"`,
    ));
  test('ani_iteration_53', () =>
    expect(animation.ani_iteration_53()).toMatchInlineSnapshot(
      `"animation-iteration-count:53;"`,
    ));
  test('ani_iteration_54', () =>
    expect(animation.ani_iteration_54()).toMatchInlineSnapshot(
      `"animation-iteration-count:54;"`,
    ));
  test('ani_iteration_55', () =>
    expect(animation.ani_iteration_55()).toMatchInlineSnapshot(
      `"animation-iteration-count:55;"`,
    ));
  test('ani_iteration_56', () =>
    expect(animation.ani_iteration_56()).toMatchInlineSnapshot(
      `"animation-iteration-count:56;"`,
    ));
  test('ani_iteration_57', () =>
    expect(animation.ani_iteration_57()).toMatchInlineSnapshot(
      `"animation-iteration-count:57;"`,
    ));
  test('ani_iteration_58', () =>
    expect(animation.ani_iteration_58()).toMatchInlineSnapshot(
      `"animation-iteration-count:58;"`,
    ));
  test('ani_iteration_59', () =>
    expect(animation.ani_iteration_59()).toMatchInlineSnapshot(
      `"animation-iteration-count:59;"`,
    ));
  test('ani_iteration_6', () =>
    expect(animation.ani_iteration_6()).toMatchInlineSnapshot(
      `"animation-iteration-count:6;"`,
    ));
  test('ani_iteration_60', () =>
    expect(animation.ani_iteration_60()).toMatchInlineSnapshot(
      `"animation-iteration-count:60;"`,
    ));
  test('ani_iteration_61', () =>
    expect(animation.ani_iteration_61()).toMatchInlineSnapshot(
      `"animation-iteration-count:61;"`,
    ));
  test('ani_iteration_62', () =>
    expect(animation.ani_iteration_62()).toMatchInlineSnapshot(
      `"animation-iteration-count:62;"`,
    ));
  test('ani_iteration_63', () =>
    expect(animation.ani_iteration_63()).toMatchInlineSnapshot(
      `"animation-iteration-count:63;"`,
    ));
  test('ani_iteration_64', () =>
    expect(animation.ani_iteration_64()).toMatchInlineSnapshot(
      `"animation-iteration-count:64;"`,
    ));
  test('ani_iteration_65', () =>
    expect(animation.ani_iteration_65()).toMatchInlineSnapshot(
      `"animation-iteration-count:65;"`,
    ));
  test('ani_iteration_66', () =>
    expect(animation.ani_iteration_66()).toMatchInlineSnapshot(
      `"animation-iteration-count:66;"`,
    ));
  test('ani_iteration_67', () =>
    expect(animation.ani_iteration_67()).toMatchInlineSnapshot(
      `"animation-iteration-count:67;"`,
    ));
  test('ani_iteration_68', () =>
    expect(animation.ani_iteration_68()).toMatchInlineSnapshot(
      `"animation-iteration-count:68;"`,
    ));
  test('ani_iteration_69', () =>
    expect(animation.ani_iteration_69()).toMatchInlineSnapshot(
      `"animation-iteration-count:69;"`,
    ));
  test('ani_iteration_7', () =>
    expect(animation.ani_iteration_7()).toMatchInlineSnapshot(
      `"animation-iteration-count:7;"`,
    ));
  test('ani_iteration_70', () =>
    expect(animation.ani_iteration_70()).toMatchInlineSnapshot(
      `"animation-iteration-count:70;"`,
    ));
  test('ani_iteration_71', () =>
    expect(animation.ani_iteration_71()).toMatchInlineSnapshot(
      `"animation-iteration-count:71;"`,
    ));
  test('ani_iteration_72', () =>
    expect(animation.ani_iteration_72()).toMatchInlineSnapshot(
      `"animation-iteration-count:72;"`,
    ));
  test('ani_iteration_73', () =>
    expect(animation.ani_iteration_73()).toMatchInlineSnapshot(
      `"animation-iteration-count:73;"`,
    ));
  test('ani_iteration_74', () =>
    expect(animation.ani_iteration_74()).toMatchInlineSnapshot(
      `"animation-iteration-count:74;"`,
    ));
  test('ani_iteration_75', () =>
    expect(animation.ani_iteration_75()).toMatchInlineSnapshot(
      `"animation-iteration-count:75;"`,
    ));
  test('ani_iteration_76', () =>
    expect(animation.ani_iteration_76()).toMatchInlineSnapshot(
      `"animation-iteration-count:76;"`,
    ));
  test('ani_iteration_77', () =>
    expect(animation.ani_iteration_77()).toMatchInlineSnapshot(
      `"animation-iteration-count:77;"`,
    ));
  test('ani_iteration_78', () =>
    expect(animation.ani_iteration_78()).toMatchInlineSnapshot(
      `"animation-iteration-count:78;"`,
    ));
  test('ani_iteration_79', () =>
    expect(animation.ani_iteration_79()).toMatchInlineSnapshot(
      `"animation-iteration-count:79;"`,
    ));
  test('ani_iteration_8', () =>
    expect(animation.ani_iteration_8()).toMatchInlineSnapshot(
      `"animation-iteration-count:8;"`,
    ));
  test('ani_iteration_80', () =>
    expect(animation.ani_iteration_80()).toMatchInlineSnapshot(
      `"animation-iteration-count:80;"`,
    ));
  test('ani_iteration_81', () =>
    expect(animation.ani_iteration_81()).toMatchInlineSnapshot(
      `"animation-iteration-count:81;"`,
    ));
  test('ani_iteration_82', () =>
    expect(animation.ani_iteration_82()).toMatchInlineSnapshot(
      `"animation-iteration-count:82;"`,
    ));
  test('ani_iteration_83', () =>
    expect(animation.ani_iteration_83()).toMatchInlineSnapshot(
      `"animation-iteration-count:83;"`,
    ));
  test('ani_iteration_84', () =>
    expect(animation.ani_iteration_84()).toMatchInlineSnapshot(
      `"animation-iteration-count:84;"`,
    ));
  test('ani_iteration_85', () =>
    expect(animation.ani_iteration_85()).toMatchInlineSnapshot(
      `"animation-iteration-count:85;"`,
    ));
  test('ani_iteration_86', () =>
    expect(animation.ani_iteration_86()).toMatchInlineSnapshot(
      `"animation-iteration-count:86;"`,
    ));
  test('ani_iteration_87', () =>
    expect(animation.ani_iteration_87()).toMatchInlineSnapshot(
      `"animation-iteration-count:87;"`,
    ));
  test('ani_iteration_88', () =>
    expect(animation.ani_iteration_88()).toMatchInlineSnapshot(
      `"animation-iteration-count:88;"`,
    ));
  test('ani_iteration_89', () =>
    expect(animation.ani_iteration_89()).toMatchInlineSnapshot(
      `"animation-iteration-count:89;"`,
    ));
  test('ani_iteration_9', () =>
    expect(animation.ani_iteration_9()).toMatchInlineSnapshot(
      `"animation-iteration-count:9;"`,
    ));
  test('ani_iteration_90', () =>
    expect(animation.ani_iteration_90()).toMatchInlineSnapshot(
      `"animation-iteration-count:90;"`,
    ));
  test('ani_iteration_91', () =>
    expect(animation.ani_iteration_91()).toMatchInlineSnapshot(
      `"animation-iteration-count:91;"`,
    ));
  test('ani_iteration_92', () =>
    expect(animation.ani_iteration_92()).toMatchInlineSnapshot(
      `"animation-iteration-count:92;"`,
    ));
  test('ani_iteration_93', () =>
    expect(animation.ani_iteration_93()).toMatchInlineSnapshot(
      `"animation-iteration-count:93;"`,
    ));
  test('ani_iteration_94', () =>
    expect(animation.ani_iteration_94()).toMatchInlineSnapshot(
      `"animation-iteration-count:94;"`,
    ));
  test('ani_iteration_95', () =>
    expect(animation.ani_iteration_95()).toMatchInlineSnapshot(
      `"animation-iteration-count:95;"`,
    ));
  test('ani_iteration_96', () =>
    expect(animation.ani_iteration_96()).toMatchInlineSnapshot(
      `"animation-iteration-count:96;"`,
    ));
  test('ani_iteration_97', () =>
    expect(animation.ani_iteration_97()).toMatchInlineSnapshot(
      `"animation-iteration-count:97;"`,
    ));
  test('ani_iteration_98', () =>
    expect(animation.ani_iteration_98()).toMatchInlineSnapshot(
      `"animation-iteration-count:98;"`,
    ));
  test('ani_iteration_99', () =>
    expect(animation.ani_iteration_99()).toMatchInlineSnapshot(
      `"animation-iteration-count:99;"`,
    ));
  test('ani_iteration_infinite', () =>
    expect(animation.ani_iteration_infinite()).toMatchInlineSnapshot(
      `"animation-iteration-count:infinite;"`,
    ));
  test('ani_linear', () =>
    expect(animation.ani_linear()).toMatchInlineSnapshot(
      `"animation-timing-function:linear;"`,
    ));
  test('ani_pause', () =>
    expect(animation.ani_pause()).toMatchInlineSnapshot(
      `"animation-play-state:paused;"`,
    ));
  test('ani_play', () =>
    expect(animation.ani_play()).toMatchInlineSnapshot(
      `"animation-play-state:running;"`,
    ));
});
