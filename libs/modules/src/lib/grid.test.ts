import { grid } from './grid';

describe('grid', () => {
  test('areas"', () =>
    expect(
      grid.areas(`
    "HEADER"
    "MAIN"
    "FOOTER"
  `),
    ).toMatchInlineSnapshot(`
      "grid-template-areas:
          \\"HEADER\\"
          \\"MAIN\\"
          \\"FOOTER\\"
        ;"
    `));
  test('cols_end_1"', () =>
    expect(grid.cols_end_1()).toMatchInlineSnapshot(`"grid-column-end:1;"`));
  test('cols_end_10"', () =>
    expect(grid.cols_end_10()).toMatchInlineSnapshot(`"grid-column-end:10;"`));
  test('cols_end_100"', () =>
    expect(grid.cols_end_100()).toMatchInlineSnapshot(
      `"grid-column-end:100;"`,
    ));
  test('cols_end_11"', () =>
    expect(grid.cols_end_11()).toMatchInlineSnapshot(`"grid-column-end:11;"`));
  test('cols_end_12"', () =>
    expect(grid.cols_end_12()).toMatchInlineSnapshot(`"grid-column-end:12;"`));
  test('cols_end_13"', () =>
    expect(grid.cols_end_13()).toMatchInlineSnapshot(`"grid-column-end:13;"`));
  test('cols_end_14"', () =>
    expect(grid.cols_end_14()).toMatchInlineSnapshot(`"grid-column-end:14;"`));
  test('cols_end_15"', () =>
    expect(grid.cols_end_15()).toMatchInlineSnapshot(`"grid-column-end:15;"`));
  test('cols_end_16"', () =>
    expect(grid.cols_end_16()).toMatchInlineSnapshot(`"grid-column-end:16;"`));
  test('cols_end_17"', () =>
    expect(grid.cols_end_17()).toMatchInlineSnapshot(`"grid-column-end:17;"`));
  test('cols_end_18"', () =>
    expect(grid.cols_end_18()).toMatchInlineSnapshot(`"grid-column-end:18;"`));
  test('cols_end_19"', () =>
    expect(grid.cols_end_19()).toMatchInlineSnapshot(`"grid-column-end:19;"`));
  test('cols_end_2"', () =>
    expect(grid.cols_end_2()).toMatchInlineSnapshot(`"grid-column-end:2;"`));
  test('cols_end_20"', () =>
    expect(grid.cols_end_20()).toMatchInlineSnapshot(`"grid-column-end:20;"`));
  test('cols_end_21"', () =>
    expect(grid.cols_end_21()).toMatchInlineSnapshot(`"grid-column-end:21;"`));
  test('cols_end_22"', () =>
    expect(grid.cols_end_22()).toMatchInlineSnapshot(`"grid-column-end:22;"`));
  test('cols_end_23"', () =>
    expect(grid.cols_end_23()).toMatchInlineSnapshot(`"grid-column-end:23;"`));
  test('cols_end_24"', () =>
    expect(grid.cols_end_24()).toMatchInlineSnapshot(`"grid-column-end:24;"`));
  test('cols_end_25"', () =>
    expect(grid.cols_end_25()).toMatchInlineSnapshot(`"grid-column-end:25;"`));
  test('cols_end_26"', () =>
    expect(grid.cols_end_26()).toMatchInlineSnapshot(`"grid-column-end:26;"`));
  test('cols_end_27"', () =>
    expect(grid.cols_end_27()).toMatchInlineSnapshot(`"grid-column-end:27;"`));
  test('cols_end_28"', () =>
    expect(grid.cols_end_28()).toMatchInlineSnapshot(`"grid-column-end:28;"`));
  test('cols_end_29"', () =>
    expect(grid.cols_end_29()).toMatchInlineSnapshot(`"grid-column-end:29;"`));
  test('cols_end_3"', () =>
    expect(grid.cols_end_3()).toMatchInlineSnapshot(`"grid-column-end:3;"`));
  test('cols_end_30"', () =>
    expect(grid.cols_end_30()).toMatchInlineSnapshot(`"grid-column-end:30;"`));
  test('cols_end_31"', () =>
    expect(grid.cols_end_31()).toMatchInlineSnapshot(`"grid-column-end:31;"`));
  test('cols_end_32"', () =>
    expect(grid.cols_end_32()).toMatchInlineSnapshot(`"grid-column-end:32;"`));
  test('cols_end_33"', () =>
    expect(grid.cols_end_33()).toMatchInlineSnapshot(`"grid-column-end:33;"`));
  test('cols_end_34"', () =>
    expect(grid.cols_end_34()).toMatchInlineSnapshot(`"grid-column-end:34;"`));
  test('cols_end_35"', () =>
    expect(grid.cols_end_35()).toMatchInlineSnapshot(`"grid-column-end:35;"`));
  test('cols_end_36"', () =>
    expect(grid.cols_end_36()).toMatchInlineSnapshot(`"grid-column-end:36;"`));
  test('cols_end_37"', () =>
    expect(grid.cols_end_37()).toMatchInlineSnapshot(`"grid-column-end:37;"`));
  test('cols_end_38"', () =>
    expect(grid.cols_end_38()).toMatchInlineSnapshot(`"grid-column-end:38;"`));
  test('cols_end_39"', () =>
    expect(grid.cols_end_39()).toMatchInlineSnapshot(`"grid-column-end:39;"`));
  test('cols_end_4"', () =>
    expect(grid.cols_end_4()).toMatchInlineSnapshot(`"grid-column-end:4;"`));
  test('cols_end_40"', () =>
    expect(grid.cols_end_40()).toMatchInlineSnapshot(`"grid-column-end:40;"`));
  test('cols_end_41"', () =>
    expect(grid.cols_end_41()).toMatchInlineSnapshot(`"grid-column-end:41;"`));
  test('cols_end_42"', () =>
    expect(grid.cols_end_42()).toMatchInlineSnapshot(`"grid-column-end:42;"`));
  test('cols_end_43"', () =>
    expect(grid.cols_end_43()).toMatchInlineSnapshot(`"grid-column-end:43;"`));
  test('cols_end_44"', () =>
    expect(grid.cols_end_44()).toMatchInlineSnapshot(`"grid-column-end:44;"`));
  test('cols_end_45"', () =>
    expect(grid.cols_end_45()).toMatchInlineSnapshot(`"grid-column-end:45;"`));
  test('cols_end_46"', () =>
    expect(grid.cols_end_46()).toMatchInlineSnapshot(`"grid-column-end:46;"`));
  test('cols_end_47"', () =>
    expect(grid.cols_end_47()).toMatchInlineSnapshot(`"grid-column-end:47;"`));
  test('cols_end_48"', () =>
    expect(grid.cols_end_48()).toMatchInlineSnapshot(`"grid-column-end:48;"`));
  test('cols_end_49"', () =>
    expect(grid.cols_end_49()).toMatchInlineSnapshot(`"grid-column-end:49;"`));
  test('cols_end_5"', () =>
    expect(grid.cols_end_5()).toMatchInlineSnapshot(`"grid-column-end:5;"`));
  test('cols_end_50"', () =>
    expect(grid.cols_end_50()).toMatchInlineSnapshot(`"grid-column-end:50;"`));
  test('cols_end_51"', () =>
    expect(grid.cols_end_51()).toMatchInlineSnapshot(`"grid-column-end:51;"`));
  test('cols_end_52"', () =>
    expect(grid.cols_end_52()).toMatchInlineSnapshot(`"grid-column-end:52;"`));
  test('cols_end_53"', () =>
    expect(grid.cols_end_53()).toMatchInlineSnapshot(`"grid-column-end:53;"`));
  test('cols_end_54"', () =>
    expect(grid.cols_end_54()).toMatchInlineSnapshot(`"grid-column-end:54;"`));
  test('cols_end_55"', () =>
    expect(grid.cols_end_55()).toMatchInlineSnapshot(`"grid-column-end:55;"`));
  test('cols_end_56"', () =>
    expect(grid.cols_end_56()).toMatchInlineSnapshot(`"grid-column-end:56;"`));
  test('cols_end_57"', () =>
    expect(grid.cols_end_57()).toMatchInlineSnapshot(`"grid-column-end:57;"`));
  test('cols_end_58"', () =>
    expect(grid.cols_end_58()).toMatchInlineSnapshot(`"grid-column-end:58;"`));
  test('cols_end_59"', () =>
    expect(grid.cols_end_59()).toMatchInlineSnapshot(`"grid-column-end:59;"`));
  test('cols_end_6"', () =>
    expect(grid.cols_end_6()).toMatchInlineSnapshot(`"grid-column-end:6;"`));
  test('cols_end_60"', () =>
    expect(grid.cols_end_60()).toMatchInlineSnapshot(`"grid-column-end:60;"`));
  test('cols_end_61"', () =>
    expect(grid.cols_end_61()).toMatchInlineSnapshot(`"grid-column-end:61;"`));
  test('cols_end_62"', () =>
    expect(grid.cols_end_62()).toMatchInlineSnapshot(`"grid-column-end:62;"`));
  test('cols_end_63"', () =>
    expect(grid.cols_end_63()).toMatchInlineSnapshot(`"grid-column-end:63;"`));
  test('cols_end_64"', () =>
    expect(grid.cols_end_64()).toMatchInlineSnapshot(`"grid-column-end:64;"`));
  test('cols_end_65"', () =>
    expect(grid.cols_end_65()).toMatchInlineSnapshot(`"grid-column-end:65;"`));
  test('cols_end_66"', () =>
    expect(grid.cols_end_66()).toMatchInlineSnapshot(`"grid-column-end:66;"`));
  test('cols_end_67"', () =>
    expect(grid.cols_end_67()).toMatchInlineSnapshot(`"grid-column-end:67;"`));
  test('cols_end_68"', () =>
    expect(grid.cols_end_68()).toMatchInlineSnapshot(`"grid-column-end:68;"`));
  test('cols_end_69"', () =>
    expect(grid.cols_end_69()).toMatchInlineSnapshot(`"grid-column-end:69;"`));
  test('cols_end_7"', () =>
    expect(grid.cols_end_7()).toMatchInlineSnapshot(`"grid-column-end:7;"`));
  test('cols_end_70"', () =>
    expect(grid.cols_end_70()).toMatchInlineSnapshot(`"grid-column-end:70;"`));
  test('cols_end_71"', () =>
    expect(grid.cols_end_71()).toMatchInlineSnapshot(`"grid-column-end:71;"`));
  test('cols_end_72"', () =>
    expect(grid.cols_end_72()).toMatchInlineSnapshot(`"grid-column-end:72;"`));
  test('cols_end_73"', () =>
    expect(grid.cols_end_73()).toMatchInlineSnapshot(`"grid-column-end:73;"`));
  test('cols_end_74"', () =>
    expect(grid.cols_end_74()).toMatchInlineSnapshot(`"grid-column-end:74;"`));
  test('cols_end_75"', () =>
    expect(grid.cols_end_75()).toMatchInlineSnapshot(`"grid-column-end:75;"`));
  test('cols_end_76"', () =>
    expect(grid.cols_end_76()).toMatchInlineSnapshot(`"grid-column-end:76;"`));
  test('cols_end_77"', () =>
    expect(grid.cols_end_77()).toMatchInlineSnapshot(`"grid-column-end:77;"`));
  test('cols_end_78"', () =>
    expect(grid.cols_end_78()).toMatchInlineSnapshot(`"grid-column-end:78;"`));
  test('cols_end_79"', () =>
    expect(grid.cols_end_79()).toMatchInlineSnapshot(`"grid-column-end:79;"`));
  test('cols_end_8"', () =>
    expect(grid.cols_end_8()).toMatchInlineSnapshot(`"grid-column-end:8;"`));
  test('cols_end_80"', () =>
    expect(grid.cols_end_80()).toMatchInlineSnapshot(`"grid-column-end:80;"`));
  test('cols_end_81"', () =>
    expect(grid.cols_end_81()).toMatchInlineSnapshot(`"grid-column-end:81;"`));
  test('cols_end_82"', () =>
    expect(grid.cols_end_82()).toMatchInlineSnapshot(`"grid-column-end:82;"`));
  test('cols_end_83"', () =>
    expect(grid.cols_end_83()).toMatchInlineSnapshot(`"grid-column-end:83;"`));
  test('cols_end_84"', () =>
    expect(grid.cols_end_84()).toMatchInlineSnapshot(`"grid-column-end:84;"`));
  test('cols_end_85"', () =>
    expect(grid.cols_end_85()).toMatchInlineSnapshot(`"grid-column-end:85;"`));
  test('cols_end_86"', () =>
    expect(grid.cols_end_86()).toMatchInlineSnapshot(`"grid-column-end:86;"`));
  test('cols_end_87"', () =>
    expect(grid.cols_end_87()).toMatchInlineSnapshot(`"grid-column-end:87;"`));
  test('cols_end_88"', () =>
    expect(grid.cols_end_88()).toMatchInlineSnapshot(`"grid-column-end:88;"`));
  test('cols_end_89"', () =>
    expect(grid.cols_end_89()).toMatchInlineSnapshot(`"grid-column-end:89;"`));
  test('cols_end_9"', () =>
    expect(grid.cols_end_9()).toMatchInlineSnapshot(`"grid-column-end:9;"`));
  test('cols_end_90"', () =>
    expect(grid.cols_end_90()).toMatchInlineSnapshot(`"grid-column-end:90;"`));
  test('cols_end_91"', () =>
    expect(grid.cols_end_91()).toMatchInlineSnapshot(`"grid-column-end:91;"`));
  test('cols_end_92"', () =>
    expect(grid.cols_end_92()).toMatchInlineSnapshot(`"grid-column-end:92;"`));
  test('cols_end_93"', () =>
    expect(grid.cols_end_93()).toMatchInlineSnapshot(`"grid-column-end:93;"`));
  test('cols_end_94"', () =>
    expect(grid.cols_end_94()).toMatchInlineSnapshot(`"grid-column-end:94;"`));
  test('cols_end_95"', () =>
    expect(grid.cols_end_95()).toMatchInlineSnapshot(`"grid-column-end:95;"`));
  test('cols_end_96"', () =>
    expect(grid.cols_end_96()).toMatchInlineSnapshot(`"grid-column-end:96;"`));
  test('cols_end_97"', () =>
    expect(grid.cols_end_97()).toMatchInlineSnapshot(`"grid-column-end:97;"`));
  test('cols_end_98"', () =>
    expect(grid.cols_end_98()).toMatchInlineSnapshot(`"grid-column-end:98;"`));
  test('cols_end_99"', () =>
    expect(grid.cols_end_99()).toMatchInlineSnapshot(`"grid-column-end:99;"`));
  test('cols_span_1"', () =>
    expect(grid.cols_span_1()).toMatchInlineSnapshot(
      `"grid-column:span 1 / span 1;"`,
    ));
  test('cols_span_10"', () =>
    expect(grid.cols_span_10()).toMatchInlineSnapshot(
      `"grid-column:span 10 / span 10;"`,
    ));
  test('cols_span_100"', () =>
    expect(grid.cols_span_100()).toMatchInlineSnapshot(
      `"grid-column:span 100 / span 100;"`,
    ));
  test('cols_span_11"', () =>
    expect(grid.cols_span_11()).toMatchInlineSnapshot(
      `"grid-column:span 11 / span 11;"`,
    ));
  test('cols_span_12"', () =>
    expect(grid.cols_span_12()).toMatchInlineSnapshot(
      `"grid-column:span 12 / span 12;"`,
    ));
  test('cols_span_13"', () =>
    expect(grid.cols_span_13()).toMatchInlineSnapshot(
      `"grid-column:span 13 / span 13;"`,
    ));
  test('cols_span_14"', () =>
    expect(grid.cols_span_14()).toMatchInlineSnapshot(
      `"grid-column:span 14 / span 14;"`,
    ));
  test('cols_span_15"', () =>
    expect(grid.cols_span_15()).toMatchInlineSnapshot(
      `"grid-column:span 15 / span 15;"`,
    ));
  test('cols_span_16"', () =>
    expect(grid.cols_span_16()).toMatchInlineSnapshot(
      `"grid-column:span 16 / span 16;"`,
    ));
  test('cols_span_17"', () =>
    expect(grid.cols_span_17()).toMatchInlineSnapshot(
      `"grid-column:span 17 / span 17;"`,
    ));
  test('cols_span_18"', () =>
    expect(grid.cols_span_18()).toMatchInlineSnapshot(
      `"grid-column:span 18 / span 18;"`,
    ));
  test('cols_span_19"', () =>
    expect(grid.cols_span_19()).toMatchInlineSnapshot(
      `"grid-column:span 19 / span 19;"`,
    ));
  test('cols_span_2"', () =>
    expect(grid.cols_span_2()).toMatchInlineSnapshot(
      `"grid-column:span 2 / span 2;"`,
    ));
  test('cols_span_20"', () =>
    expect(grid.cols_span_20()).toMatchInlineSnapshot(
      `"grid-column:span 20 / span 20;"`,
    ));
  test('cols_span_21"', () =>
    expect(grid.cols_span_21()).toMatchInlineSnapshot(
      `"grid-column:span 21 / span 21;"`,
    ));
  test('cols_span_22"', () =>
    expect(grid.cols_span_22()).toMatchInlineSnapshot(
      `"grid-column:span 22 / span 22;"`,
    ));
  test('cols_span_23"', () =>
    expect(grid.cols_span_23()).toMatchInlineSnapshot(
      `"grid-column:span 23 / span 23;"`,
    ));
  test('cols_span_24"', () =>
    expect(grid.cols_span_24()).toMatchInlineSnapshot(
      `"grid-column:span 24 / span 24;"`,
    ));
  test('cols_span_25"', () =>
    expect(grid.cols_span_25()).toMatchInlineSnapshot(
      `"grid-column:span 25 / span 25;"`,
    ));
  test('cols_span_26"', () =>
    expect(grid.cols_span_26()).toMatchInlineSnapshot(
      `"grid-column:span 26 / span 26;"`,
    ));
  test('cols_span_27"', () =>
    expect(grid.cols_span_27()).toMatchInlineSnapshot(
      `"grid-column:span 27 / span 27;"`,
    ));
  test('cols_span_28"', () =>
    expect(grid.cols_span_28()).toMatchInlineSnapshot(
      `"grid-column:span 28 / span 28;"`,
    ));
  test('cols_span_29"', () =>
    expect(grid.cols_span_29()).toMatchInlineSnapshot(
      `"grid-column:span 29 / span 29;"`,
    ));
  test('cols_span_3"', () =>
    expect(grid.cols_span_3()).toMatchInlineSnapshot(
      `"grid-column:span 3 / span 3;"`,
    ));
  test('cols_span_30"', () =>
    expect(grid.cols_span_30()).toMatchInlineSnapshot(
      `"grid-column:span 30 / span 30;"`,
    ));
  test('cols_span_31"', () =>
    expect(grid.cols_span_31()).toMatchInlineSnapshot(
      `"grid-column:span 31 / span 31;"`,
    ));
  test('cols_span_32"', () =>
    expect(grid.cols_span_32()).toMatchInlineSnapshot(
      `"grid-column:span 32 / span 32;"`,
    ));
  test('cols_span_33"', () =>
    expect(grid.cols_span_33()).toMatchInlineSnapshot(
      `"grid-column:span 33 / span 33;"`,
    ));
  test('cols_span_34"', () =>
    expect(grid.cols_span_34()).toMatchInlineSnapshot(
      `"grid-column:span 34 / span 34;"`,
    ));
  test('cols_span_35"', () =>
    expect(grid.cols_span_35()).toMatchInlineSnapshot(
      `"grid-column:span 35 / span 35;"`,
    ));
  test('cols_span_36"', () =>
    expect(grid.cols_span_36()).toMatchInlineSnapshot(
      `"grid-column:span 36 / span 36;"`,
    ));
  test('cols_span_37"', () =>
    expect(grid.cols_span_37()).toMatchInlineSnapshot(
      `"grid-column:span 37 / span 37;"`,
    ));
  test('cols_span_38"', () =>
    expect(grid.cols_span_38()).toMatchInlineSnapshot(
      `"grid-column:span 38 / span 38;"`,
    ));
  test('cols_span_39"', () =>
    expect(grid.cols_span_39()).toMatchInlineSnapshot(
      `"grid-column:span 39 / span 39;"`,
    ));
  test('cols_span_4"', () =>
    expect(grid.cols_span_4()).toMatchInlineSnapshot(
      `"grid-column:span 4 / span 4;"`,
    ));
  test('cols_span_40"', () =>
    expect(grid.cols_span_40()).toMatchInlineSnapshot(
      `"grid-column:span 40 / span 40;"`,
    ));
  test('cols_span_41"', () =>
    expect(grid.cols_span_41()).toMatchInlineSnapshot(
      `"grid-column:span 41 / span 41;"`,
    ));
  test('cols_span_42"', () =>
    expect(grid.cols_span_42()).toMatchInlineSnapshot(
      `"grid-column:span 42 / span 42;"`,
    ));
  test('cols_span_43"', () =>
    expect(grid.cols_span_43()).toMatchInlineSnapshot(
      `"grid-column:span 43 / span 43;"`,
    ));
  test('cols_span_44"', () =>
    expect(grid.cols_span_44()).toMatchInlineSnapshot(
      `"grid-column:span 44 / span 44;"`,
    ));
  test('cols_span_45"', () =>
    expect(grid.cols_span_45()).toMatchInlineSnapshot(
      `"grid-column:span 45 / span 45;"`,
    ));
  test('cols_span_46"', () =>
    expect(grid.cols_span_46()).toMatchInlineSnapshot(
      `"grid-column:span 46 / span 46;"`,
    ));
  test('cols_span_47"', () =>
    expect(grid.cols_span_47()).toMatchInlineSnapshot(
      `"grid-column:span 47 / span 47;"`,
    ));
  test('cols_span_48"', () =>
    expect(grid.cols_span_48()).toMatchInlineSnapshot(
      `"grid-column:span 48 / span 48;"`,
    ));
  test('cols_span_49"', () =>
    expect(grid.cols_span_49()).toMatchInlineSnapshot(
      `"grid-column:span 49 / span 49;"`,
    ));
  test('cols_span_5"', () =>
    expect(grid.cols_span_5()).toMatchInlineSnapshot(
      `"grid-column:span 5 / span 5;"`,
    ));
  test('cols_span_50"', () =>
    expect(grid.cols_span_50()).toMatchInlineSnapshot(
      `"grid-column:span 50 / span 50;"`,
    ));
  test('cols_span_51"', () =>
    expect(grid.cols_span_51()).toMatchInlineSnapshot(
      `"grid-column:span 51 / span 51;"`,
    ));
  test('cols_span_52"', () =>
    expect(grid.cols_span_52()).toMatchInlineSnapshot(
      `"grid-column:span 52 / span 52;"`,
    ));
  test('cols_span_53"', () =>
    expect(grid.cols_span_53()).toMatchInlineSnapshot(
      `"grid-column:span 53 / span 53;"`,
    ));
  test('cols_span_54"', () =>
    expect(grid.cols_span_54()).toMatchInlineSnapshot(
      `"grid-column:span 54 / span 54;"`,
    ));
  test('cols_span_55"', () =>
    expect(grid.cols_span_55()).toMatchInlineSnapshot(
      `"grid-column:span 55 / span 55;"`,
    ));
  test('cols_span_56"', () =>
    expect(grid.cols_span_56()).toMatchInlineSnapshot(
      `"grid-column:span 56 / span 56;"`,
    ));
  test('cols_span_57"', () =>
    expect(grid.cols_span_57()).toMatchInlineSnapshot(
      `"grid-column:span 57 / span 57;"`,
    ));
  test('cols_span_58"', () =>
    expect(grid.cols_span_58()).toMatchInlineSnapshot(
      `"grid-column:span 58 / span 58;"`,
    ));
  test('cols_span_59"', () =>
    expect(grid.cols_span_59()).toMatchInlineSnapshot(
      `"grid-column:span 59 / span 59;"`,
    ));
  test('cols_span_6"', () =>
    expect(grid.cols_span_6()).toMatchInlineSnapshot(
      `"grid-column:span 6 / span 6;"`,
    ));
  test('cols_span_60"', () =>
    expect(grid.cols_span_60()).toMatchInlineSnapshot(
      `"grid-column:span 60 / span 60;"`,
    ));
  test('cols_span_61"', () =>
    expect(grid.cols_span_61()).toMatchInlineSnapshot(
      `"grid-column:span 61 / span 61;"`,
    ));
  test('cols_span_62"', () =>
    expect(grid.cols_span_62()).toMatchInlineSnapshot(
      `"grid-column:span 62 / span 62;"`,
    ));
  test('cols_span_63"', () =>
    expect(grid.cols_span_63()).toMatchInlineSnapshot(
      `"grid-column:span 63 / span 63;"`,
    ));
  test('cols_span_64"', () =>
    expect(grid.cols_span_64()).toMatchInlineSnapshot(
      `"grid-column:span 64 / span 64;"`,
    ));
  test('cols_span_65"', () =>
    expect(grid.cols_span_65()).toMatchInlineSnapshot(
      `"grid-column:span 65 / span 65;"`,
    ));
  test('cols_span_66"', () =>
    expect(grid.cols_span_66()).toMatchInlineSnapshot(
      `"grid-column:span 66 / span 66;"`,
    ));
  test('cols_span_67"', () =>
    expect(grid.cols_span_67()).toMatchInlineSnapshot(
      `"grid-column:span 67 / span 67;"`,
    ));
  test('cols_span_68"', () =>
    expect(grid.cols_span_68()).toMatchInlineSnapshot(
      `"grid-column:span 68 / span 68;"`,
    ));
  test('cols_span_69"', () =>
    expect(grid.cols_span_69()).toMatchInlineSnapshot(
      `"grid-column:span 69 / span 69;"`,
    ));
  test('cols_span_7"', () =>
    expect(grid.cols_span_7()).toMatchInlineSnapshot(
      `"grid-column:span 7 / span 7;"`,
    ));
  test('cols_span_70"', () =>
    expect(grid.cols_span_70()).toMatchInlineSnapshot(
      `"grid-column:span 70 / span 70;"`,
    ));
  test('cols_span_71"', () =>
    expect(grid.cols_span_71()).toMatchInlineSnapshot(
      `"grid-column:span 71 / span 71;"`,
    ));
  test('cols_span_72"', () =>
    expect(grid.cols_span_72()).toMatchInlineSnapshot(
      `"grid-column:span 72 / span 72;"`,
    ));
  test('cols_span_73"', () =>
    expect(grid.cols_span_73()).toMatchInlineSnapshot(
      `"grid-column:span 73 / span 73;"`,
    ));
  test('cols_span_74"', () =>
    expect(grid.cols_span_74()).toMatchInlineSnapshot(
      `"grid-column:span 74 / span 74;"`,
    ));
  test('cols_span_75"', () =>
    expect(grid.cols_span_75()).toMatchInlineSnapshot(
      `"grid-column:span 75 / span 75;"`,
    ));
  test('cols_span_76"', () =>
    expect(grid.cols_span_76()).toMatchInlineSnapshot(
      `"grid-column:span 76 / span 76;"`,
    ));
  test('cols_span_77"', () =>
    expect(grid.cols_span_77()).toMatchInlineSnapshot(
      `"grid-column:span 77 / span 77;"`,
    ));
  test('cols_span_78"', () =>
    expect(grid.cols_span_78()).toMatchInlineSnapshot(
      `"grid-column:span 78 / span 78;"`,
    ));
  test('cols_span_79"', () =>
    expect(grid.cols_span_79()).toMatchInlineSnapshot(
      `"grid-column:span 79 / span 79;"`,
    ));
  test('cols_span_8"', () =>
    expect(grid.cols_span_8()).toMatchInlineSnapshot(
      `"grid-column:span 8 / span 8;"`,
    ));
  test('cols_span_80"', () =>
    expect(grid.cols_span_80()).toMatchInlineSnapshot(
      `"grid-column:span 80 / span 80;"`,
    ));
  test('cols_span_81"', () =>
    expect(grid.cols_span_81()).toMatchInlineSnapshot(
      `"grid-column:span 81 / span 81;"`,
    ));
  test('cols_span_82"', () =>
    expect(grid.cols_span_82()).toMatchInlineSnapshot(
      `"grid-column:span 82 / span 82;"`,
    ));
  test('cols_span_83"', () =>
    expect(grid.cols_span_83()).toMatchInlineSnapshot(
      `"grid-column:span 83 / span 83;"`,
    ));
  test('cols_span_84"', () =>
    expect(grid.cols_span_84()).toMatchInlineSnapshot(
      `"grid-column:span 84 / span 84;"`,
    ));
  test('cols_span_85"', () =>
    expect(grid.cols_span_85()).toMatchInlineSnapshot(
      `"grid-column:span 85 / span 85;"`,
    ));
  test('cols_span_86"', () =>
    expect(grid.cols_span_86()).toMatchInlineSnapshot(
      `"grid-column:span 86 / span 86;"`,
    ));
  test('cols_span_87"', () =>
    expect(grid.cols_span_87()).toMatchInlineSnapshot(
      `"grid-column:span 87 / span 87;"`,
    ));
  test('cols_span_88"', () =>
    expect(grid.cols_span_88()).toMatchInlineSnapshot(
      `"grid-column:span 88 / span 88;"`,
    ));
  test('cols_span_89"', () =>
    expect(grid.cols_span_89()).toMatchInlineSnapshot(
      `"grid-column:span 89 / span 89;"`,
    ));
  test('cols_span_9"', () =>
    expect(grid.cols_span_9()).toMatchInlineSnapshot(
      `"grid-column:span 9 / span 9;"`,
    ));
  test('cols_span_90"', () =>
    expect(grid.cols_span_90()).toMatchInlineSnapshot(
      `"grid-column:span 90 / span 90;"`,
    ));
  test('cols_span_91"', () =>
    expect(grid.cols_span_91()).toMatchInlineSnapshot(
      `"grid-column:span 91 / span 91;"`,
    ));
  test('cols_span_92"', () =>
    expect(grid.cols_span_92()).toMatchInlineSnapshot(
      `"grid-column:span 92 / span 92;"`,
    ));
  test('cols_span_93"', () =>
    expect(grid.cols_span_93()).toMatchInlineSnapshot(
      `"grid-column:span 93 / span 93;"`,
    ));
  test('cols_span_94"', () =>
    expect(grid.cols_span_94()).toMatchInlineSnapshot(
      `"grid-column:span 94 / span 94;"`,
    ));
  test('cols_span_95"', () =>
    expect(grid.cols_span_95()).toMatchInlineSnapshot(
      `"grid-column:span 95 / span 95;"`,
    ));
  test('cols_span_96"', () =>
    expect(grid.cols_span_96()).toMatchInlineSnapshot(
      `"grid-column:span 96 / span 96;"`,
    ));
  test('cols_span_97"', () =>
    expect(grid.cols_span_97()).toMatchInlineSnapshot(
      `"grid-column:span 97 / span 97;"`,
    ));
  test('cols_span_98"', () =>
    expect(grid.cols_span_98()).toMatchInlineSnapshot(
      `"grid-column:span 98 / span 98;"`,
    ));
  test('cols_span_99"', () =>
    expect(grid.cols_span_99()).toMatchInlineSnapshot(
      `"grid-column:span 99 / span 99;"`,
    ));
  test('cols_start_1"', () =>
    expect(grid.cols_start_1()).toMatchInlineSnapshot(
      `"grid-column-start:1;"`,
    ));
  test('cols_start_10"', () =>
    expect(grid.cols_start_10()).toMatchInlineSnapshot(
      `"grid-column-start:10;"`,
    ));
  test('cols_start_100"', () =>
    expect(grid.cols_start_100()).toMatchInlineSnapshot(
      `"grid-column-start:100;"`,
    ));
  test('cols_start_11"', () =>
    expect(grid.cols_start_11()).toMatchInlineSnapshot(
      `"grid-column-start:11;"`,
    ));
  test('cols_start_12"', () =>
    expect(grid.cols_start_12()).toMatchInlineSnapshot(
      `"grid-column-start:12;"`,
    ));
  test('cols_start_13"', () =>
    expect(grid.cols_start_13()).toMatchInlineSnapshot(
      `"grid-column-start:13;"`,
    ));
  test('cols_start_14"', () =>
    expect(grid.cols_start_14()).toMatchInlineSnapshot(
      `"grid-column-start:14;"`,
    ));
  test('cols_start_15"', () =>
    expect(grid.cols_start_15()).toMatchInlineSnapshot(
      `"grid-column-start:15;"`,
    ));
  test('cols_start_16"', () =>
    expect(grid.cols_start_16()).toMatchInlineSnapshot(
      `"grid-column-start:16;"`,
    ));
  test('cols_start_17"', () =>
    expect(grid.cols_start_17()).toMatchInlineSnapshot(
      `"grid-column-start:17;"`,
    ));
  test('cols_start_18"', () =>
    expect(grid.cols_start_18()).toMatchInlineSnapshot(
      `"grid-column-start:18;"`,
    ));
  test('cols_start_19"', () =>
    expect(grid.cols_start_19()).toMatchInlineSnapshot(
      `"grid-column-start:19;"`,
    ));
  test('cols_start_2"', () =>
    expect(grid.cols_start_2()).toMatchInlineSnapshot(
      `"grid-column-start:2;"`,
    ));
  test('cols_start_20"', () =>
    expect(grid.cols_start_20()).toMatchInlineSnapshot(
      `"grid-column-start:20;"`,
    ));
  test('cols_start_21"', () =>
    expect(grid.cols_start_21()).toMatchInlineSnapshot(
      `"grid-column-start:21;"`,
    ));
  test('cols_start_22"', () =>
    expect(grid.cols_start_22()).toMatchInlineSnapshot(
      `"grid-column-start:22;"`,
    ));
  test('cols_start_23"', () =>
    expect(grid.cols_start_23()).toMatchInlineSnapshot(
      `"grid-column-start:23;"`,
    ));
  test('cols_start_24"', () =>
    expect(grid.cols_start_24()).toMatchInlineSnapshot(
      `"grid-column-start:24;"`,
    ));
  test('cols_start_25"', () =>
    expect(grid.cols_start_25()).toMatchInlineSnapshot(
      `"grid-column-start:25;"`,
    ));
  test('cols_start_26"', () =>
    expect(grid.cols_start_26()).toMatchInlineSnapshot(
      `"grid-column-start:26;"`,
    ));
  test('cols_start_27"', () =>
    expect(grid.cols_start_27()).toMatchInlineSnapshot(
      `"grid-column-start:27;"`,
    ));
  test('cols_start_28"', () =>
    expect(grid.cols_start_28()).toMatchInlineSnapshot(
      `"grid-column-start:28;"`,
    ));
  test('cols_start_29"', () =>
    expect(grid.cols_start_29()).toMatchInlineSnapshot(
      `"grid-column-start:29;"`,
    ));
  test('cols_start_3"', () =>
    expect(grid.cols_start_3()).toMatchInlineSnapshot(
      `"grid-column-start:3;"`,
    ));
  test('cols_start_30"', () =>
    expect(grid.cols_start_30()).toMatchInlineSnapshot(
      `"grid-column-start:30;"`,
    ));
  test('cols_start_31"', () =>
    expect(grid.cols_start_31()).toMatchInlineSnapshot(
      `"grid-column-start:31;"`,
    ));
  test('cols_start_32"', () =>
    expect(grid.cols_start_32()).toMatchInlineSnapshot(
      `"grid-column-start:32;"`,
    ));
  test('cols_start_33"', () =>
    expect(grid.cols_start_33()).toMatchInlineSnapshot(
      `"grid-column-start:33;"`,
    ));
  test('cols_start_34"', () =>
    expect(grid.cols_start_34()).toMatchInlineSnapshot(
      `"grid-column-start:34;"`,
    ));
  test('cols_start_35"', () =>
    expect(grid.cols_start_35()).toMatchInlineSnapshot(
      `"grid-column-start:35;"`,
    ));
  test('cols_start_36"', () =>
    expect(grid.cols_start_36()).toMatchInlineSnapshot(
      `"grid-column-start:36;"`,
    ));
  test('cols_start_37"', () =>
    expect(grid.cols_start_37()).toMatchInlineSnapshot(
      `"grid-column-start:37;"`,
    ));
  test('cols_start_38"', () =>
    expect(grid.cols_start_38()).toMatchInlineSnapshot(
      `"grid-column-start:38;"`,
    ));
  test('cols_start_39"', () =>
    expect(grid.cols_start_39()).toMatchInlineSnapshot(
      `"grid-column-start:39;"`,
    ));
  test('cols_start_4"', () =>
    expect(grid.cols_start_4()).toMatchInlineSnapshot(
      `"grid-column-start:4;"`,
    ));
  test('cols_start_40"', () =>
    expect(grid.cols_start_40()).toMatchInlineSnapshot(
      `"grid-column-start:40;"`,
    ));
  test('cols_start_41"', () =>
    expect(grid.cols_start_41()).toMatchInlineSnapshot(
      `"grid-column-start:41;"`,
    ));
  test('cols_start_42"', () =>
    expect(grid.cols_start_42()).toMatchInlineSnapshot(
      `"grid-column-start:42;"`,
    ));
  test('cols_start_43"', () =>
    expect(grid.cols_start_43()).toMatchInlineSnapshot(
      `"grid-column-start:43;"`,
    ));
  test('cols_start_44"', () =>
    expect(grid.cols_start_44()).toMatchInlineSnapshot(
      `"grid-column-start:44;"`,
    ));
  test('cols_start_45"', () =>
    expect(grid.cols_start_45()).toMatchInlineSnapshot(
      `"grid-column-start:45;"`,
    ));
  test('cols_start_46"', () =>
    expect(grid.cols_start_46()).toMatchInlineSnapshot(
      `"grid-column-start:46;"`,
    ));
  test('cols_start_47"', () =>
    expect(grid.cols_start_47()).toMatchInlineSnapshot(
      `"grid-column-start:47;"`,
    ));
  test('cols_start_48"', () =>
    expect(grid.cols_start_48()).toMatchInlineSnapshot(
      `"grid-column-start:48;"`,
    ));
  test('cols_start_49"', () =>
    expect(grid.cols_start_49()).toMatchInlineSnapshot(
      `"grid-column-start:49;"`,
    ));
  test('cols_start_5"', () =>
    expect(grid.cols_start_5()).toMatchInlineSnapshot(
      `"grid-column-start:5;"`,
    ));
  test('cols_start_50"', () =>
    expect(grid.cols_start_50()).toMatchInlineSnapshot(
      `"grid-column-start:50;"`,
    ));
  test('cols_start_51"', () =>
    expect(grid.cols_start_51()).toMatchInlineSnapshot(
      `"grid-column-start:51;"`,
    ));
  test('cols_start_52"', () =>
    expect(grid.cols_start_52()).toMatchInlineSnapshot(
      `"grid-column-start:52;"`,
    ));
  test('cols_start_53"', () =>
    expect(grid.cols_start_53()).toMatchInlineSnapshot(
      `"grid-column-start:53;"`,
    ));
  test('cols_start_54"', () =>
    expect(grid.cols_start_54()).toMatchInlineSnapshot(
      `"grid-column-start:54;"`,
    ));
  test('cols_start_55"', () =>
    expect(grid.cols_start_55()).toMatchInlineSnapshot(
      `"grid-column-start:55;"`,
    ));
  test('cols_start_56"', () =>
    expect(grid.cols_start_56()).toMatchInlineSnapshot(
      `"grid-column-start:56;"`,
    ));
  test('cols_start_57"', () =>
    expect(grid.cols_start_57()).toMatchInlineSnapshot(
      `"grid-column-start:57;"`,
    ));
  test('cols_start_58"', () =>
    expect(grid.cols_start_58()).toMatchInlineSnapshot(
      `"grid-column-start:58;"`,
    ));
  test('cols_start_59"', () =>
    expect(grid.cols_start_59()).toMatchInlineSnapshot(
      `"grid-column-start:59;"`,
    ));
  test('cols_start_6"', () =>
    expect(grid.cols_start_6()).toMatchInlineSnapshot(
      `"grid-column-start:6;"`,
    ));
  test('cols_start_60"', () =>
    expect(grid.cols_start_60()).toMatchInlineSnapshot(
      `"grid-column-start:60;"`,
    ));
  test('cols_start_61"', () =>
    expect(grid.cols_start_61()).toMatchInlineSnapshot(
      `"grid-column-start:61;"`,
    ));
  test('cols_start_62"', () =>
    expect(grid.cols_start_62()).toMatchInlineSnapshot(
      `"grid-column-start:62;"`,
    ));
  test('cols_start_63"', () =>
    expect(grid.cols_start_63()).toMatchInlineSnapshot(
      `"grid-column-start:63;"`,
    ));
  test('cols_start_64"', () =>
    expect(grid.cols_start_64()).toMatchInlineSnapshot(
      `"grid-column-start:64;"`,
    ));
  test('cols_start_65"', () =>
    expect(grid.cols_start_65()).toMatchInlineSnapshot(
      `"grid-column-start:65;"`,
    ));
  test('cols_start_66"', () =>
    expect(grid.cols_start_66()).toMatchInlineSnapshot(
      `"grid-column-start:66;"`,
    ));
  test('cols_start_67"', () =>
    expect(grid.cols_start_67()).toMatchInlineSnapshot(
      `"grid-column-start:67;"`,
    ));
  test('cols_start_68"', () =>
    expect(grid.cols_start_68()).toMatchInlineSnapshot(
      `"grid-column-start:68;"`,
    ));
  test('cols_start_69"', () =>
    expect(grid.cols_start_69()).toMatchInlineSnapshot(
      `"grid-column-start:69;"`,
    ));
  test('cols_start_7"', () =>
    expect(grid.cols_start_7()).toMatchInlineSnapshot(
      `"grid-column-start:7;"`,
    ));
  test('cols_start_70"', () =>
    expect(grid.cols_start_70()).toMatchInlineSnapshot(
      `"grid-column-start:70;"`,
    ));
  test('cols_start_71"', () =>
    expect(grid.cols_start_71()).toMatchInlineSnapshot(
      `"grid-column-start:71;"`,
    ));
  test('cols_start_72"', () =>
    expect(grid.cols_start_72()).toMatchInlineSnapshot(
      `"grid-column-start:72;"`,
    ));
  test('cols_start_73"', () =>
    expect(grid.cols_start_73()).toMatchInlineSnapshot(
      `"grid-column-start:73;"`,
    ));
  test('cols_start_74"', () =>
    expect(grid.cols_start_74()).toMatchInlineSnapshot(
      `"grid-column-start:74;"`,
    ));
  test('cols_start_75"', () =>
    expect(grid.cols_start_75()).toMatchInlineSnapshot(
      `"grid-column-start:75;"`,
    ));
  test('cols_start_76"', () =>
    expect(grid.cols_start_76()).toMatchInlineSnapshot(
      `"grid-column-start:76;"`,
    ));
  test('cols_start_77"', () =>
    expect(grid.cols_start_77()).toMatchInlineSnapshot(
      `"grid-column-start:77;"`,
    ));
  test('cols_start_78"', () =>
    expect(grid.cols_start_78()).toMatchInlineSnapshot(
      `"grid-column-start:78;"`,
    ));
  test('cols_start_79"', () =>
    expect(grid.cols_start_79()).toMatchInlineSnapshot(
      `"grid-column-start:79;"`,
    ));
  test('cols_start_8"', () =>
    expect(grid.cols_start_8()).toMatchInlineSnapshot(
      `"grid-column-start:8;"`,
    ));
  test('cols_start_80"', () =>
    expect(grid.cols_start_80()).toMatchInlineSnapshot(
      `"grid-column-start:80;"`,
    ));
  test('cols_start_81"', () =>
    expect(grid.cols_start_81()).toMatchInlineSnapshot(
      `"grid-column-start:81;"`,
    ));
  test('cols_start_82"', () =>
    expect(grid.cols_start_82()).toMatchInlineSnapshot(
      `"grid-column-start:82;"`,
    ));
  test('cols_start_83"', () =>
    expect(grid.cols_start_83()).toMatchInlineSnapshot(
      `"grid-column-start:83;"`,
    ));
  test('cols_start_84"', () =>
    expect(grid.cols_start_84()).toMatchInlineSnapshot(
      `"grid-column-start:84;"`,
    ));
  test('cols_start_85"', () =>
    expect(grid.cols_start_85()).toMatchInlineSnapshot(
      `"grid-column-start:85;"`,
    ));
  test('cols_start_86"', () =>
    expect(grid.cols_start_86()).toMatchInlineSnapshot(
      `"grid-column-start:86;"`,
    ));
  test('cols_start_87"', () =>
    expect(grid.cols_start_87()).toMatchInlineSnapshot(
      `"grid-column-start:87;"`,
    ));
  test('cols_start_88"', () =>
    expect(grid.cols_start_88()).toMatchInlineSnapshot(
      `"grid-column-start:88;"`,
    ));
  test('cols_start_89"', () =>
    expect(grid.cols_start_89()).toMatchInlineSnapshot(
      `"grid-column-start:89;"`,
    ));
  test('cols_start_9"', () =>
    expect(grid.cols_start_9()).toMatchInlineSnapshot(
      `"grid-column-start:9;"`,
    ));
  test('cols_start_90"', () =>
    expect(grid.cols_start_90()).toMatchInlineSnapshot(
      `"grid-column-start:90;"`,
    ));
  test('cols_start_91"', () =>
    expect(grid.cols_start_91()).toMatchInlineSnapshot(
      `"grid-column-start:91;"`,
    ));
  test('cols_start_92"', () =>
    expect(grid.cols_start_92()).toMatchInlineSnapshot(
      `"grid-column-start:92;"`,
    ));
  test('cols_start_93"', () =>
    expect(grid.cols_start_93()).toMatchInlineSnapshot(
      `"grid-column-start:93;"`,
    ));
  test('cols_start_94"', () =>
    expect(grid.cols_start_94()).toMatchInlineSnapshot(
      `"grid-column-start:94;"`,
    ));
  test('cols_start_95"', () =>
    expect(grid.cols_start_95()).toMatchInlineSnapshot(
      `"grid-column-start:95;"`,
    ));
  test('cols_start_96"', () =>
    expect(grid.cols_start_96()).toMatchInlineSnapshot(
      `"grid-column-start:96;"`,
    ));
  test('cols_start_97"', () =>
    expect(grid.cols_start_97()).toMatchInlineSnapshot(
      `"grid-column-start:97;"`,
    ));
  test('cols_start_98"', () =>
    expect(grid.cols_start_98()).toMatchInlineSnapshot(
      `"grid-column-start:98;"`,
    ));
  test('cols_start_99"', () =>
    expect(grid.cols_start_99()).toMatchInlineSnapshot(
      `"grid-column-start:99;"`,
    ));
  test('grid"', () =>
    expect(grid.grid()).toMatchInlineSnapshot(`"display:grid;"`));
  test('grid_gap_auto"', () =>
    expect(grid.grid_gap_auto()).toMatchInlineSnapshot(`"grid-gap:auto;"`));
  test('grid_gap_lg"', () =>
    expect(grid.grid_gap_lg()).toMatchInlineSnapshot(`"grid-gap:0.5rem;"`));
  test('grid_gap_md"', () =>
    expect(grid.grid_gap_md()).toMatchInlineSnapshot(`"grid-gap:0.375rem;"`));
  test('grid_gap_none"', () =>
    expect(grid.grid_gap_none()).toMatchInlineSnapshot(`"grid-gap:0rem;"`));
  test('grid_gap_px"', () =>
    expect(grid.grid_gap_px()).toMatchInlineSnapshot(`"grid-gap:0.0625rem;"`));
  test('grid_gap_sm"', () =>
    expect(grid.grid_gap_sm()).toMatchInlineSnapshot(`"grid-gap:0.25rem;"`));
  test('grid_gap_xl"', () =>
    expect(grid.grid_gap_xl()).toMatchInlineSnapshot(`"grid-gap:0.75rem;"`));
  test('grid_gap_xs"', () =>
    expect(grid.grid_gap_xs()).toMatchInlineSnapshot(`"grid-gap:0.125rem;"`));
  test('rows_end_1"', () =>
    expect(grid.rows_end_1()).toMatchInlineSnapshot(`"grid-row-end:1;"`));
  test('rows_end_10"', () =>
    expect(grid.rows_end_10()).toMatchInlineSnapshot(`"grid-row-end:10;"`));
  test('rows_end_100"', () =>
    expect(grid.rows_end_100()).toMatchInlineSnapshot(`"grid-row-end:100;"`));
  test('rows_end_11"', () =>
    expect(grid.rows_end_11()).toMatchInlineSnapshot(`"grid-row-end:11;"`));
  test('rows_end_12"', () =>
    expect(grid.rows_end_12()).toMatchInlineSnapshot(`"grid-row-end:12;"`));
  test('rows_end_13"', () =>
    expect(grid.rows_end_13()).toMatchInlineSnapshot(`"grid-row-end:13;"`));
  test('rows_end_14"', () =>
    expect(grid.rows_end_14()).toMatchInlineSnapshot(`"grid-row-end:14;"`));
  test('rows_end_15"', () =>
    expect(grid.rows_end_15()).toMatchInlineSnapshot(`"grid-row-end:15;"`));
  test('rows_end_16"', () =>
    expect(grid.rows_end_16()).toMatchInlineSnapshot(`"grid-row-end:16;"`));
  test('rows_end_17"', () =>
    expect(grid.rows_end_17()).toMatchInlineSnapshot(`"grid-row-end:17;"`));
  test('rows_end_18"', () =>
    expect(grid.rows_end_18()).toMatchInlineSnapshot(`"grid-row-end:18;"`));
  test('rows_end_19"', () =>
    expect(grid.rows_end_19()).toMatchInlineSnapshot(`"grid-row-end:19;"`));
  test('rows_end_2"', () =>
    expect(grid.rows_end_2()).toMatchInlineSnapshot(`"grid-row-end:2;"`));
  test('rows_end_20"', () =>
    expect(grid.rows_end_20()).toMatchInlineSnapshot(`"grid-row-end:20;"`));
  test('rows_end_21"', () =>
    expect(grid.rows_end_21()).toMatchInlineSnapshot(`"grid-row-end:21;"`));
  test('rows_end_22"', () =>
    expect(grid.rows_end_22()).toMatchInlineSnapshot(`"grid-row-end:22;"`));
  test('rows_end_23"', () =>
    expect(grid.rows_end_23()).toMatchInlineSnapshot(`"grid-row-end:23;"`));
  test('rows_end_24"', () =>
    expect(grid.rows_end_24()).toMatchInlineSnapshot(`"grid-row-end:24;"`));
  test('rows_end_25"', () =>
    expect(grid.rows_end_25()).toMatchInlineSnapshot(`"grid-row-end:25;"`));
  test('rows_end_26"', () =>
    expect(grid.rows_end_26()).toMatchInlineSnapshot(`"grid-row-end:26;"`));
  test('rows_end_27"', () =>
    expect(grid.rows_end_27()).toMatchInlineSnapshot(`"grid-row-end:27;"`));
  test('rows_end_28"', () =>
    expect(grid.rows_end_28()).toMatchInlineSnapshot(`"grid-row-end:28;"`));
  test('rows_end_29"', () =>
    expect(grid.rows_end_29()).toMatchInlineSnapshot(`"grid-row-end:29;"`));
  test('rows_end_3"', () =>
    expect(grid.rows_end_3()).toMatchInlineSnapshot(`"grid-row-end:3;"`));
  test('rows_end_30"', () =>
    expect(grid.rows_end_30()).toMatchInlineSnapshot(`"grid-row-end:30;"`));
  test('rows_end_31"', () =>
    expect(grid.rows_end_31()).toMatchInlineSnapshot(`"grid-row-end:31;"`));
  test('rows_end_32"', () =>
    expect(grid.rows_end_32()).toMatchInlineSnapshot(`"grid-row-end:32;"`));
  test('rows_end_33"', () =>
    expect(grid.rows_end_33()).toMatchInlineSnapshot(`"grid-row-end:33;"`));
  test('rows_end_34"', () =>
    expect(grid.rows_end_34()).toMatchInlineSnapshot(`"grid-row-end:34;"`));
  test('rows_end_35"', () =>
    expect(grid.rows_end_35()).toMatchInlineSnapshot(`"grid-row-end:35;"`));
  test('rows_end_36"', () =>
    expect(grid.rows_end_36()).toMatchInlineSnapshot(`"grid-row-end:36;"`));
  test('rows_end_37"', () =>
    expect(grid.rows_end_37()).toMatchInlineSnapshot(`"grid-row-end:37;"`));
  test('rows_end_38"', () =>
    expect(grid.rows_end_38()).toMatchInlineSnapshot(`"grid-row-end:38;"`));
  test('rows_end_39"', () =>
    expect(grid.rows_end_39()).toMatchInlineSnapshot(`"grid-row-end:39;"`));
  test('rows_end_4"', () =>
    expect(grid.rows_end_4()).toMatchInlineSnapshot(`"grid-row-end:4;"`));
  test('rows_end_40"', () =>
    expect(grid.rows_end_40()).toMatchInlineSnapshot(`"grid-row-end:40;"`));
  test('rows_end_41"', () =>
    expect(grid.rows_end_41()).toMatchInlineSnapshot(`"grid-row-end:41;"`));
  test('rows_end_42"', () =>
    expect(grid.rows_end_42()).toMatchInlineSnapshot(`"grid-row-end:42;"`));
  test('rows_end_43"', () =>
    expect(grid.rows_end_43()).toMatchInlineSnapshot(`"grid-row-end:43;"`));
  test('rows_end_44"', () =>
    expect(grid.rows_end_44()).toMatchInlineSnapshot(`"grid-row-end:44;"`));
  test('rows_end_45"', () =>
    expect(grid.rows_end_45()).toMatchInlineSnapshot(`"grid-row-end:45;"`));
  test('rows_end_46"', () =>
    expect(grid.rows_end_46()).toMatchInlineSnapshot(`"grid-row-end:46;"`));
  test('rows_end_47"', () =>
    expect(grid.rows_end_47()).toMatchInlineSnapshot(`"grid-row-end:47;"`));
  test('rows_end_48"', () =>
    expect(grid.rows_end_48()).toMatchInlineSnapshot(`"grid-row-end:48;"`));
  test('rows_end_49"', () =>
    expect(grid.rows_end_49()).toMatchInlineSnapshot(`"grid-row-end:49;"`));
  test('rows_end_5"', () =>
    expect(grid.rows_end_5()).toMatchInlineSnapshot(`"grid-row-end:5;"`));
  test('rows_end_50"', () =>
    expect(grid.rows_end_50()).toMatchInlineSnapshot(`"grid-row-end:50;"`));
  test('rows_end_51"', () =>
    expect(grid.rows_end_51()).toMatchInlineSnapshot(`"grid-row-end:51;"`));
  test('rows_end_52"', () =>
    expect(grid.rows_end_52()).toMatchInlineSnapshot(`"grid-row-end:52;"`));
  test('rows_end_53"', () =>
    expect(grid.rows_end_53()).toMatchInlineSnapshot(`"grid-row-end:53;"`));
  test('rows_end_54"', () =>
    expect(grid.rows_end_54()).toMatchInlineSnapshot(`"grid-row-end:54;"`));
  test('rows_end_55"', () =>
    expect(grid.rows_end_55()).toMatchInlineSnapshot(`"grid-row-end:55;"`));
  test('rows_end_56"', () =>
    expect(grid.rows_end_56()).toMatchInlineSnapshot(`"grid-row-end:56;"`));
  test('rows_end_57"', () =>
    expect(grid.rows_end_57()).toMatchInlineSnapshot(`"grid-row-end:57;"`));
  test('rows_end_58"', () =>
    expect(grid.rows_end_58()).toMatchInlineSnapshot(`"grid-row-end:58;"`));
  test('rows_end_59"', () =>
    expect(grid.rows_end_59()).toMatchInlineSnapshot(`"grid-row-end:59;"`));
  test('rows_end_6"', () =>
    expect(grid.rows_end_6()).toMatchInlineSnapshot(`"grid-row-end:6;"`));
  test('rows_end_60"', () =>
    expect(grid.rows_end_60()).toMatchInlineSnapshot(`"grid-row-end:60;"`));
  test('rows_end_61"', () =>
    expect(grid.rows_end_61()).toMatchInlineSnapshot(`"grid-row-end:61;"`));
  test('rows_end_62"', () =>
    expect(grid.rows_end_62()).toMatchInlineSnapshot(`"grid-row-end:62;"`));
  test('rows_end_63"', () =>
    expect(grid.rows_end_63()).toMatchInlineSnapshot(`"grid-row-end:63;"`));
  test('rows_end_64"', () =>
    expect(grid.rows_end_64()).toMatchInlineSnapshot(`"grid-row-end:64;"`));
  test('rows_end_65"', () =>
    expect(grid.rows_end_65()).toMatchInlineSnapshot(`"grid-row-end:65;"`));
  test('rows_end_66"', () =>
    expect(grid.rows_end_66()).toMatchInlineSnapshot(`"grid-row-end:66;"`));
  test('rows_end_67"', () =>
    expect(grid.rows_end_67()).toMatchInlineSnapshot(`"grid-row-end:67;"`));
  test('rows_end_68"', () =>
    expect(grid.rows_end_68()).toMatchInlineSnapshot(`"grid-row-end:68;"`));
  test('rows_end_69"', () =>
    expect(grid.rows_end_69()).toMatchInlineSnapshot(`"grid-row-end:69;"`));
  test('rows_end_7"', () =>
    expect(grid.rows_end_7()).toMatchInlineSnapshot(`"grid-row-end:7;"`));
  test('rows_end_70"', () =>
    expect(grid.rows_end_70()).toMatchInlineSnapshot(`"grid-row-end:70;"`));
  test('rows_end_71"', () =>
    expect(grid.rows_end_71()).toMatchInlineSnapshot(`"grid-row-end:71;"`));
  test('rows_end_72"', () =>
    expect(grid.rows_end_72()).toMatchInlineSnapshot(`"grid-row-end:72;"`));
  test('rows_end_73"', () =>
    expect(grid.rows_end_73()).toMatchInlineSnapshot(`"grid-row-end:73;"`));
  test('rows_end_74"', () =>
    expect(grid.rows_end_74()).toMatchInlineSnapshot(`"grid-row-end:74;"`));
  test('rows_end_75"', () =>
    expect(grid.rows_end_75()).toMatchInlineSnapshot(`"grid-row-end:75;"`));
  test('rows_end_76"', () =>
    expect(grid.rows_end_76()).toMatchInlineSnapshot(`"grid-row-end:76;"`));
  test('rows_end_77"', () =>
    expect(grid.rows_end_77()).toMatchInlineSnapshot(`"grid-row-end:77;"`));
  test('rows_end_78"', () =>
    expect(grid.rows_end_78()).toMatchInlineSnapshot(`"grid-row-end:78;"`));
  test('rows_end_79"', () =>
    expect(grid.rows_end_79()).toMatchInlineSnapshot(`"grid-row-end:79;"`));
  test('rows_end_8"', () =>
    expect(grid.rows_end_8()).toMatchInlineSnapshot(`"grid-row-end:8;"`));
  test('rows_end_80"', () =>
    expect(grid.rows_end_80()).toMatchInlineSnapshot(`"grid-row-end:80;"`));
  test('rows_end_81"', () =>
    expect(grid.rows_end_81()).toMatchInlineSnapshot(`"grid-row-end:81;"`));
  test('rows_end_82"', () =>
    expect(grid.rows_end_82()).toMatchInlineSnapshot(`"grid-row-end:82;"`));
  test('rows_end_83"', () =>
    expect(grid.rows_end_83()).toMatchInlineSnapshot(`"grid-row-end:83;"`));
  test('rows_end_84"', () =>
    expect(grid.rows_end_84()).toMatchInlineSnapshot(`"grid-row-end:84;"`));
  test('rows_end_85"', () =>
    expect(grid.rows_end_85()).toMatchInlineSnapshot(`"grid-row-end:85;"`));
  test('rows_end_86"', () =>
    expect(grid.rows_end_86()).toMatchInlineSnapshot(`"grid-row-end:86;"`));
  test('rows_end_87"', () =>
    expect(grid.rows_end_87()).toMatchInlineSnapshot(`"grid-row-end:87;"`));
  test('rows_end_88"', () =>
    expect(grid.rows_end_88()).toMatchInlineSnapshot(`"grid-row-end:88;"`));
  test('rows_end_89"', () =>
    expect(grid.rows_end_89()).toMatchInlineSnapshot(`"grid-row-end:89;"`));
  test('rows_end_9"', () =>
    expect(grid.rows_end_9()).toMatchInlineSnapshot(`"grid-row-end:9;"`));
  test('rows_end_90"', () =>
    expect(grid.rows_end_90()).toMatchInlineSnapshot(`"grid-row-end:90;"`));
  test('rows_end_91"', () =>
    expect(grid.rows_end_91()).toMatchInlineSnapshot(`"grid-row-end:91;"`));
  test('rows_end_92"', () =>
    expect(grid.rows_end_92()).toMatchInlineSnapshot(`"grid-row-end:92;"`));
  test('rows_end_93"', () =>
    expect(grid.rows_end_93()).toMatchInlineSnapshot(`"grid-row-end:93;"`));
  test('rows_end_94"', () =>
    expect(grid.rows_end_94()).toMatchInlineSnapshot(`"grid-row-end:94;"`));
  test('rows_end_95"', () =>
    expect(grid.rows_end_95()).toMatchInlineSnapshot(`"grid-row-end:95;"`));
  test('rows_end_96"', () =>
    expect(grid.rows_end_96()).toMatchInlineSnapshot(`"grid-row-end:96;"`));
  test('rows_end_97"', () =>
    expect(grid.rows_end_97()).toMatchInlineSnapshot(`"grid-row-end:97;"`));
  test('rows_end_98"', () =>
    expect(grid.rows_end_98()).toMatchInlineSnapshot(`"grid-row-end:98;"`));
  test('rows_end_99"', () =>
    expect(grid.rows_end_99()).toMatchInlineSnapshot(`"grid-row-end:99;"`));
  test('rows_span_1"', () =>
    expect(grid.rows_span_1()).toMatchInlineSnapshot(
      `"grid-row:span 1 / span 1;"`,
    ));
  test('rows_span_10"', () =>
    expect(grid.rows_span_10()).toMatchInlineSnapshot(
      `"grid-row:span 10 / span 10;"`,
    ));
  test('rows_span_100"', () =>
    expect(grid.rows_span_100()).toMatchInlineSnapshot(
      `"grid-row:span 100 / span 100;"`,
    ));
  test('rows_span_11"', () =>
    expect(grid.rows_span_11()).toMatchInlineSnapshot(
      `"grid-row:span 11 / span 11;"`,
    ));
  test('rows_span_12"', () =>
    expect(grid.rows_span_12()).toMatchInlineSnapshot(
      `"grid-row:span 12 / span 12;"`,
    ));
  test('rows_span_13"', () =>
    expect(grid.rows_span_13()).toMatchInlineSnapshot(
      `"grid-row:span 13 / span 13;"`,
    ));
  test('rows_span_14"', () =>
    expect(grid.rows_span_14()).toMatchInlineSnapshot(
      `"grid-row:span 14 / span 14;"`,
    ));
  test('rows_span_15"', () =>
    expect(grid.rows_span_15()).toMatchInlineSnapshot(
      `"grid-row:span 15 / span 15;"`,
    ));
  test('rows_span_16"', () =>
    expect(grid.rows_span_16()).toMatchInlineSnapshot(
      `"grid-row:span 16 / span 16;"`,
    ));
  test('rows_span_17"', () =>
    expect(grid.rows_span_17()).toMatchInlineSnapshot(
      `"grid-row:span 17 / span 17;"`,
    ));
  test('rows_span_18"', () =>
    expect(grid.rows_span_18()).toMatchInlineSnapshot(
      `"grid-row:span 18 / span 18;"`,
    ));
  test('rows_span_19"', () =>
    expect(grid.rows_span_19()).toMatchInlineSnapshot(
      `"grid-row:span 19 / span 19;"`,
    ));
  test('rows_span_2"', () =>
    expect(grid.rows_span_2()).toMatchInlineSnapshot(
      `"grid-row:span 2 / span 2;"`,
    ));
  test('rows_span_20"', () =>
    expect(grid.rows_span_20()).toMatchInlineSnapshot(
      `"grid-row:span 20 / span 20;"`,
    ));
  test('rows_span_21"', () =>
    expect(grid.rows_span_21()).toMatchInlineSnapshot(
      `"grid-row:span 21 / span 21;"`,
    ));
  test('rows_span_22"', () =>
    expect(grid.rows_span_22()).toMatchInlineSnapshot(
      `"grid-row:span 22 / span 22;"`,
    ));
  test('rows_span_23"', () =>
    expect(grid.rows_span_23()).toMatchInlineSnapshot(
      `"grid-row:span 23 / span 23;"`,
    ));
  test('rows_span_24"', () =>
    expect(grid.rows_span_24()).toMatchInlineSnapshot(
      `"grid-row:span 24 / span 24;"`,
    ));
  test('rows_span_25"', () =>
    expect(grid.rows_span_25()).toMatchInlineSnapshot(
      `"grid-row:span 25 / span 25;"`,
    ));
  test('rows_span_26"', () =>
    expect(grid.rows_span_26()).toMatchInlineSnapshot(
      `"grid-row:span 26 / span 26;"`,
    ));
  test('rows_span_27"', () =>
    expect(grid.rows_span_27()).toMatchInlineSnapshot(
      `"grid-row:span 27 / span 27;"`,
    ));
  test('rows_span_28"', () =>
    expect(grid.rows_span_28()).toMatchInlineSnapshot(
      `"grid-row:span 28 / span 28;"`,
    ));
  test('rows_span_29"', () =>
    expect(grid.rows_span_29()).toMatchInlineSnapshot(
      `"grid-row:span 29 / span 29;"`,
    ));
  test('rows_span_3"', () =>
    expect(grid.rows_span_3()).toMatchInlineSnapshot(
      `"grid-row:span 3 / span 3;"`,
    ));
  test('rows_span_30"', () =>
    expect(grid.rows_span_30()).toMatchInlineSnapshot(
      `"grid-row:span 30 / span 30;"`,
    ));
  test('rows_span_31"', () =>
    expect(grid.rows_span_31()).toMatchInlineSnapshot(
      `"grid-row:span 31 / span 31;"`,
    ));
  test('rows_span_32"', () =>
    expect(grid.rows_span_32()).toMatchInlineSnapshot(
      `"grid-row:span 32 / span 32;"`,
    ));
  test('rows_span_33"', () =>
    expect(grid.rows_span_33()).toMatchInlineSnapshot(
      `"grid-row:span 33 / span 33;"`,
    ));
  test('rows_span_34"', () =>
    expect(grid.rows_span_34()).toMatchInlineSnapshot(
      `"grid-row:span 34 / span 34;"`,
    ));
  test('rows_span_35"', () =>
    expect(grid.rows_span_35()).toMatchInlineSnapshot(
      `"grid-row:span 35 / span 35;"`,
    ));
  test('rows_span_36"', () =>
    expect(grid.rows_span_36()).toMatchInlineSnapshot(
      `"grid-row:span 36 / span 36;"`,
    ));
  test('rows_span_37"', () =>
    expect(grid.rows_span_37()).toMatchInlineSnapshot(
      `"grid-row:span 37 / span 37;"`,
    ));
  test('rows_span_38"', () =>
    expect(grid.rows_span_38()).toMatchInlineSnapshot(
      `"grid-row:span 38 / span 38;"`,
    ));
  test('rows_span_39"', () =>
    expect(grid.rows_span_39()).toMatchInlineSnapshot(
      `"grid-row:span 39 / span 39;"`,
    ));
  test('rows_span_4"', () =>
    expect(grid.rows_span_4()).toMatchInlineSnapshot(
      `"grid-row:span 4 / span 4;"`,
    ));
  test('rows_span_40"', () =>
    expect(grid.rows_span_40()).toMatchInlineSnapshot(
      `"grid-row:span 40 / span 40;"`,
    ));
  test('rows_span_41"', () =>
    expect(grid.rows_span_41()).toMatchInlineSnapshot(
      `"grid-row:span 41 / span 41;"`,
    ));
  test('rows_span_42"', () =>
    expect(grid.rows_span_42()).toMatchInlineSnapshot(
      `"grid-row:span 42 / span 42;"`,
    ));
  test('rows_span_43"', () =>
    expect(grid.rows_span_43()).toMatchInlineSnapshot(
      `"grid-row:span 43 / span 43;"`,
    ));
  test('rows_span_44"', () =>
    expect(grid.rows_span_44()).toMatchInlineSnapshot(
      `"grid-row:span 44 / span 44;"`,
    ));
  test('rows_span_45"', () =>
    expect(grid.rows_span_45()).toMatchInlineSnapshot(
      `"grid-row:span 45 / span 45;"`,
    ));
  test('rows_span_46"', () =>
    expect(grid.rows_span_46()).toMatchInlineSnapshot(
      `"grid-row:span 46 / span 46;"`,
    ));
  test('rows_span_47"', () =>
    expect(grid.rows_span_47()).toMatchInlineSnapshot(
      `"grid-row:span 47 / span 47;"`,
    ));
  test('rows_span_48"', () =>
    expect(grid.rows_span_48()).toMatchInlineSnapshot(
      `"grid-row:span 48 / span 48;"`,
    ));
  test('rows_span_49"', () =>
    expect(grid.rows_span_49()).toMatchInlineSnapshot(
      `"grid-row:span 49 / span 49;"`,
    ));
  test('rows_span_5"', () =>
    expect(grid.rows_span_5()).toMatchInlineSnapshot(
      `"grid-row:span 5 / span 5;"`,
    ));
  test('rows_span_50"', () =>
    expect(grid.rows_span_50()).toMatchInlineSnapshot(
      `"grid-row:span 50 / span 50;"`,
    ));
  test('rows_span_51"', () =>
    expect(grid.rows_span_51()).toMatchInlineSnapshot(
      `"grid-row:span 51 / span 51;"`,
    ));
  test('rows_span_52"', () =>
    expect(grid.rows_span_52()).toMatchInlineSnapshot(
      `"grid-row:span 52 / span 52;"`,
    ));
  test('rows_span_53"', () =>
    expect(grid.rows_span_53()).toMatchInlineSnapshot(
      `"grid-row:span 53 / span 53;"`,
    ));
  test('rows_span_54"', () =>
    expect(grid.rows_span_54()).toMatchInlineSnapshot(
      `"grid-row:span 54 / span 54;"`,
    ));
  test('rows_span_55"', () =>
    expect(grid.rows_span_55()).toMatchInlineSnapshot(
      `"grid-row:span 55 / span 55;"`,
    ));
  test('rows_span_56"', () =>
    expect(grid.rows_span_56()).toMatchInlineSnapshot(
      `"grid-row:span 56 / span 56;"`,
    ));
  test('rows_span_57"', () =>
    expect(grid.rows_span_57()).toMatchInlineSnapshot(
      `"grid-row:span 57 / span 57;"`,
    ));
  test('rows_span_58"', () =>
    expect(grid.rows_span_58()).toMatchInlineSnapshot(
      `"grid-row:span 58 / span 58;"`,
    ));
  test('rows_span_59"', () =>
    expect(grid.rows_span_59()).toMatchInlineSnapshot(
      `"grid-row:span 59 / span 59;"`,
    ));
  test('rows_span_6"', () =>
    expect(grid.rows_span_6()).toMatchInlineSnapshot(
      `"grid-row:span 6 / span 6;"`,
    ));
  test('rows_span_60"', () =>
    expect(grid.rows_span_60()).toMatchInlineSnapshot(
      `"grid-row:span 60 / span 60;"`,
    ));
  test('rows_span_61"', () =>
    expect(grid.rows_span_61()).toMatchInlineSnapshot(
      `"grid-row:span 61 / span 61;"`,
    ));
  test('rows_span_62"', () =>
    expect(grid.rows_span_62()).toMatchInlineSnapshot(
      `"grid-row:span 62 / span 62;"`,
    ));
  test('rows_span_63"', () =>
    expect(grid.rows_span_63()).toMatchInlineSnapshot(
      `"grid-row:span 63 / span 63;"`,
    ));
  test('rows_span_64"', () =>
    expect(grid.rows_span_64()).toMatchInlineSnapshot(
      `"grid-row:span 64 / span 64;"`,
    ));
  test('rows_span_65"', () =>
    expect(grid.rows_span_65()).toMatchInlineSnapshot(
      `"grid-row:span 65 / span 65;"`,
    ));
  test('rows_span_66"', () =>
    expect(grid.rows_span_66()).toMatchInlineSnapshot(
      `"grid-row:span 66 / span 66;"`,
    ));
  test('rows_span_67"', () =>
    expect(grid.rows_span_67()).toMatchInlineSnapshot(
      `"grid-row:span 67 / span 67;"`,
    ));
  test('rows_span_68"', () =>
    expect(grid.rows_span_68()).toMatchInlineSnapshot(
      `"grid-row:span 68 / span 68;"`,
    ));
  test('rows_span_69"', () =>
    expect(grid.rows_span_69()).toMatchInlineSnapshot(
      `"grid-row:span 69 / span 69;"`,
    ));
  test('rows_span_7"', () =>
    expect(grid.rows_span_7()).toMatchInlineSnapshot(
      `"grid-row:span 7 / span 7;"`,
    ));
  test('rows_span_70"', () =>
    expect(grid.rows_span_70()).toMatchInlineSnapshot(
      `"grid-row:span 70 / span 70;"`,
    ));
  test('rows_span_71"', () =>
    expect(grid.rows_span_71()).toMatchInlineSnapshot(
      `"grid-row:span 71 / span 71;"`,
    ));
  test('rows_span_72"', () =>
    expect(grid.rows_span_72()).toMatchInlineSnapshot(
      `"grid-row:span 72 / span 72;"`,
    ));
  test('rows_span_73"', () =>
    expect(grid.rows_span_73()).toMatchInlineSnapshot(
      `"grid-row:span 73 / span 73;"`,
    ));
  test('rows_span_74"', () =>
    expect(grid.rows_span_74()).toMatchInlineSnapshot(
      `"grid-row:span 74 / span 74;"`,
    ));
  test('rows_span_75"', () =>
    expect(grid.rows_span_75()).toMatchInlineSnapshot(
      `"grid-row:span 75 / span 75;"`,
    ));
  test('rows_span_76"', () =>
    expect(grid.rows_span_76()).toMatchInlineSnapshot(
      `"grid-row:span 76 / span 76;"`,
    ));
  test('rows_span_77"', () =>
    expect(grid.rows_span_77()).toMatchInlineSnapshot(
      `"grid-row:span 77 / span 77;"`,
    ));
  test('rows_span_78"', () =>
    expect(grid.rows_span_78()).toMatchInlineSnapshot(
      `"grid-row:span 78 / span 78;"`,
    ));
  test('rows_span_79"', () =>
    expect(grid.rows_span_79()).toMatchInlineSnapshot(
      `"grid-row:span 79 / span 79;"`,
    ));
  test('rows_span_8"', () =>
    expect(grid.rows_span_8()).toMatchInlineSnapshot(
      `"grid-row:span 8 / span 8;"`,
    ));
  test('rows_span_80"', () =>
    expect(grid.rows_span_80()).toMatchInlineSnapshot(
      `"grid-row:span 80 / span 80;"`,
    ));
  test('rows_span_81"', () =>
    expect(grid.rows_span_81()).toMatchInlineSnapshot(
      `"grid-row:span 81 / span 81;"`,
    ));
  test('rows_span_82"', () =>
    expect(grid.rows_span_82()).toMatchInlineSnapshot(
      `"grid-row:span 82 / span 82;"`,
    ));
  test('rows_span_83"', () =>
    expect(grid.rows_span_83()).toMatchInlineSnapshot(
      `"grid-row:span 83 / span 83;"`,
    ));
  test('rows_span_84"', () =>
    expect(grid.rows_span_84()).toMatchInlineSnapshot(
      `"grid-row:span 84 / span 84;"`,
    ));
  test('rows_span_85"', () =>
    expect(grid.rows_span_85()).toMatchInlineSnapshot(
      `"grid-row:span 85 / span 85;"`,
    ));
  test('rows_span_86"', () =>
    expect(grid.rows_span_86()).toMatchInlineSnapshot(
      `"grid-row:span 86 / span 86;"`,
    ));
  test('rows_span_87"', () =>
    expect(grid.rows_span_87()).toMatchInlineSnapshot(
      `"grid-row:span 87 / span 87;"`,
    ));
  test('rows_span_88"', () =>
    expect(grid.rows_span_88()).toMatchInlineSnapshot(
      `"grid-row:span 88 / span 88;"`,
    ));
  test('rows_span_89"', () =>
    expect(grid.rows_span_89()).toMatchInlineSnapshot(
      `"grid-row:span 89 / span 89;"`,
    ));
  test('rows_span_9"', () =>
    expect(grid.rows_span_9()).toMatchInlineSnapshot(
      `"grid-row:span 9 / span 9;"`,
    ));
  test('rows_span_90"', () =>
    expect(grid.rows_span_90()).toMatchInlineSnapshot(
      `"grid-row:span 90 / span 90;"`,
    ));
  test('rows_span_91"', () =>
    expect(grid.rows_span_91()).toMatchInlineSnapshot(
      `"grid-row:span 91 / span 91;"`,
    ));
  test('rows_span_92"', () =>
    expect(grid.rows_span_92()).toMatchInlineSnapshot(
      `"grid-row:span 92 / span 92;"`,
    ));
  test('rows_span_93"', () =>
    expect(grid.rows_span_93()).toMatchInlineSnapshot(
      `"grid-row:span 93 / span 93;"`,
    ));
  test('rows_span_94"', () =>
    expect(grid.rows_span_94()).toMatchInlineSnapshot(
      `"grid-row:span 94 / span 94;"`,
    ));
  test('rows_span_95"', () =>
    expect(grid.rows_span_95()).toMatchInlineSnapshot(
      `"grid-row:span 95 / span 95;"`,
    ));
  test('rows_span_96"', () =>
    expect(grid.rows_span_96()).toMatchInlineSnapshot(
      `"grid-row:span 96 / span 96;"`,
    ));
  test('rows_span_97"', () =>
    expect(grid.rows_span_97()).toMatchInlineSnapshot(
      `"grid-row:span 97 / span 97;"`,
    ));
  test('rows_span_98"', () =>
    expect(grid.rows_span_98()).toMatchInlineSnapshot(
      `"grid-row:span 98 / span 98;"`,
    ));
  test('rows_span_99"', () =>
    expect(grid.rows_span_99()).toMatchInlineSnapshot(
      `"grid-row:span 99 / span 99;"`,
    ));
  test('rows_start_1"', () =>
    expect(grid.rows_start_1()).toMatchInlineSnapshot(`"grid-row-start:1;"`));
  test('rows_start_10"', () =>
    expect(grid.rows_start_10()).toMatchInlineSnapshot(`"grid-row-start:10;"`));
  test('rows_start_100"', () =>
    expect(grid.rows_start_100()).toMatchInlineSnapshot(
      `"grid-row-start:100;"`,
    ));
  test('rows_start_11"', () =>
    expect(grid.rows_start_11()).toMatchInlineSnapshot(`"grid-row-start:11;"`));
  test('rows_start_12"', () =>
    expect(grid.rows_start_12()).toMatchInlineSnapshot(`"grid-row-start:12;"`));
  test('rows_start_13"', () =>
    expect(grid.rows_start_13()).toMatchInlineSnapshot(`"grid-row-start:13;"`));
  test('rows_start_14"', () =>
    expect(grid.rows_start_14()).toMatchInlineSnapshot(`"grid-row-start:14;"`));
  test('rows_start_15"', () =>
    expect(grid.rows_start_15()).toMatchInlineSnapshot(`"grid-row-start:15;"`));
  test('rows_start_16"', () =>
    expect(grid.rows_start_16()).toMatchInlineSnapshot(`"grid-row-start:16;"`));
  test('rows_start_17"', () =>
    expect(grid.rows_start_17()).toMatchInlineSnapshot(`"grid-row-start:17;"`));
  test('rows_start_18"', () =>
    expect(grid.rows_start_18()).toMatchInlineSnapshot(`"grid-row-start:18;"`));
  test('rows_start_19"', () =>
    expect(grid.rows_start_19()).toMatchInlineSnapshot(`"grid-row-start:19;"`));
  test('rows_start_2"', () =>
    expect(grid.rows_start_2()).toMatchInlineSnapshot(`"grid-row-start:2;"`));
  test('rows_start_20"', () =>
    expect(grid.rows_start_20()).toMatchInlineSnapshot(`"grid-row-start:20;"`));
  test('rows_start_21"', () =>
    expect(grid.rows_start_21()).toMatchInlineSnapshot(`"grid-row-start:21;"`));
  test('rows_start_22"', () =>
    expect(grid.rows_start_22()).toMatchInlineSnapshot(`"grid-row-start:22;"`));
  test('rows_start_23"', () =>
    expect(grid.rows_start_23()).toMatchInlineSnapshot(`"grid-row-start:23;"`));
  test('rows_start_24"', () =>
    expect(grid.rows_start_24()).toMatchInlineSnapshot(`"grid-row-start:24;"`));
  test('rows_start_25"', () =>
    expect(grid.rows_start_25()).toMatchInlineSnapshot(`"grid-row-start:25;"`));
  test('rows_start_26"', () =>
    expect(grid.rows_start_26()).toMatchInlineSnapshot(`"grid-row-start:26;"`));
  test('rows_start_27"', () =>
    expect(grid.rows_start_27()).toMatchInlineSnapshot(`"grid-row-start:27;"`));
  test('rows_start_28"', () =>
    expect(grid.rows_start_28()).toMatchInlineSnapshot(`"grid-row-start:28;"`));
  test('rows_start_29"', () =>
    expect(grid.rows_start_29()).toMatchInlineSnapshot(`"grid-row-start:29;"`));
  test('rows_start_3"', () =>
    expect(grid.rows_start_3()).toMatchInlineSnapshot(`"grid-row-start:3;"`));
  test('rows_start_30"', () =>
    expect(grid.rows_start_30()).toMatchInlineSnapshot(`"grid-row-start:30;"`));
  test('rows_start_31"', () =>
    expect(grid.rows_start_31()).toMatchInlineSnapshot(`"grid-row-start:31;"`));
  test('rows_start_32"', () =>
    expect(grid.rows_start_32()).toMatchInlineSnapshot(`"grid-row-start:32;"`));
  test('rows_start_33"', () =>
    expect(grid.rows_start_33()).toMatchInlineSnapshot(`"grid-row-start:33;"`));
  test('rows_start_34"', () =>
    expect(grid.rows_start_34()).toMatchInlineSnapshot(`"grid-row-start:34;"`));
  test('rows_start_35"', () =>
    expect(grid.rows_start_35()).toMatchInlineSnapshot(`"grid-row-start:35;"`));
  test('rows_start_36"', () =>
    expect(grid.rows_start_36()).toMatchInlineSnapshot(`"grid-row-start:36;"`));
  test('rows_start_37"', () =>
    expect(grid.rows_start_37()).toMatchInlineSnapshot(`"grid-row-start:37;"`));
  test('rows_start_38"', () =>
    expect(grid.rows_start_38()).toMatchInlineSnapshot(`"grid-row-start:38;"`));
  test('rows_start_39"', () =>
    expect(grid.rows_start_39()).toMatchInlineSnapshot(`"grid-row-start:39;"`));
  test('rows_start_4"', () =>
    expect(grid.rows_start_4()).toMatchInlineSnapshot(`"grid-row-start:4;"`));
  test('rows_start_40"', () =>
    expect(grid.rows_start_40()).toMatchInlineSnapshot(`"grid-row-start:40;"`));
  test('rows_start_41"', () =>
    expect(grid.rows_start_41()).toMatchInlineSnapshot(`"grid-row-start:41;"`));
  test('rows_start_42"', () =>
    expect(grid.rows_start_42()).toMatchInlineSnapshot(`"grid-row-start:42;"`));
  test('rows_start_43"', () =>
    expect(grid.rows_start_43()).toMatchInlineSnapshot(`"grid-row-start:43;"`));
  test('rows_start_44"', () =>
    expect(grid.rows_start_44()).toMatchInlineSnapshot(`"grid-row-start:44;"`));
  test('rows_start_45"', () =>
    expect(grid.rows_start_45()).toMatchInlineSnapshot(`"grid-row-start:45;"`));
  test('rows_start_46"', () =>
    expect(grid.rows_start_46()).toMatchInlineSnapshot(`"grid-row-start:46;"`));
  test('rows_start_47"', () =>
    expect(grid.rows_start_47()).toMatchInlineSnapshot(`"grid-row-start:47;"`));
  test('rows_start_48"', () =>
    expect(grid.rows_start_48()).toMatchInlineSnapshot(`"grid-row-start:48;"`));
  test('rows_start_49"', () =>
    expect(grid.rows_start_49()).toMatchInlineSnapshot(`"grid-row-start:49;"`));
  test('rows_start_5"', () =>
    expect(grid.rows_start_5()).toMatchInlineSnapshot(`"grid-row-start:5;"`));
  test('rows_start_50"', () =>
    expect(grid.rows_start_50()).toMatchInlineSnapshot(`"grid-row-start:50;"`));
  test('rows_start_51"', () =>
    expect(grid.rows_start_51()).toMatchInlineSnapshot(`"grid-row-start:51;"`));
  test('rows_start_52"', () =>
    expect(grid.rows_start_52()).toMatchInlineSnapshot(`"grid-row-start:52;"`));
  test('rows_start_53"', () =>
    expect(grid.rows_start_53()).toMatchInlineSnapshot(`"grid-row-start:53;"`));
  test('rows_start_54"', () =>
    expect(grid.rows_start_54()).toMatchInlineSnapshot(`"grid-row-start:54;"`));
  test('rows_start_55"', () =>
    expect(grid.rows_start_55()).toMatchInlineSnapshot(`"grid-row-start:55;"`));
  test('rows_start_56"', () =>
    expect(grid.rows_start_56()).toMatchInlineSnapshot(`"grid-row-start:56;"`));
  test('rows_start_57"', () =>
    expect(grid.rows_start_57()).toMatchInlineSnapshot(`"grid-row-start:57;"`));
  test('rows_start_58"', () =>
    expect(grid.rows_start_58()).toMatchInlineSnapshot(`"grid-row-start:58;"`));
  test('rows_start_59"', () =>
    expect(grid.rows_start_59()).toMatchInlineSnapshot(`"grid-row-start:59;"`));
  test('rows_start_6"', () =>
    expect(grid.rows_start_6()).toMatchInlineSnapshot(`"grid-row-start:6;"`));
  test('rows_start_60"', () =>
    expect(grid.rows_start_60()).toMatchInlineSnapshot(`"grid-row-start:60;"`));
  test('rows_start_61"', () =>
    expect(grid.rows_start_61()).toMatchInlineSnapshot(`"grid-row-start:61;"`));
  test('rows_start_62"', () =>
    expect(grid.rows_start_62()).toMatchInlineSnapshot(`"grid-row-start:62;"`));
  test('rows_start_63"', () =>
    expect(grid.rows_start_63()).toMatchInlineSnapshot(`"grid-row-start:63;"`));
  test('rows_start_64"', () =>
    expect(grid.rows_start_64()).toMatchInlineSnapshot(`"grid-row-start:64;"`));
  test('rows_start_65"', () =>
    expect(grid.rows_start_65()).toMatchInlineSnapshot(`"grid-row-start:65;"`));
  test('rows_start_66"', () =>
    expect(grid.rows_start_66()).toMatchInlineSnapshot(`"grid-row-start:66;"`));
  test('rows_start_67"', () =>
    expect(grid.rows_start_67()).toMatchInlineSnapshot(`"grid-row-start:67;"`));
  test('rows_start_68"', () =>
    expect(grid.rows_start_68()).toMatchInlineSnapshot(`"grid-row-start:68;"`));
  test('rows_start_69"', () =>
    expect(grid.rows_start_69()).toMatchInlineSnapshot(`"grid-row-start:69;"`));
  test('rows_start_7"', () =>
    expect(grid.rows_start_7()).toMatchInlineSnapshot(`"grid-row-start:7;"`));
  test('rows_start_70"', () =>
    expect(grid.rows_start_70()).toMatchInlineSnapshot(`"grid-row-start:70;"`));
  test('rows_start_71"', () =>
    expect(grid.rows_start_71()).toMatchInlineSnapshot(`"grid-row-start:71;"`));
  test('rows_start_72"', () =>
    expect(grid.rows_start_72()).toMatchInlineSnapshot(`"grid-row-start:72;"`));
  test('rows_start_73"', () =>
    expect(grid.rows_start_73()).toMatchInlineSnapshot(`"grid-row-start:73;"`));
  test('rows_start_74"', () =>
    expect(grid.rows_start_74()).toMatchInlineSnapshot(`"grid-row-start:74;"`));
  test('rows_start_75"', () =>
    expect(grid.rows_start_75()).toMatchInlineSnapshot(`"grid-row-start:75;"`));
  test('rows_start_76"', () =>
    expect(grid.rows_start_76()).toMatchInlineSnapshot(`"grid-row-start:76;"`));
  test('rows_start_77"', () =>
    expect(grid.rows_start_77()).toMatchInlineSnapshot(`"grid-row-start:77;"`));
  test('rows_start_78"', () =>
    expect(grid.rows_start_78()).toMatchInlineSnapshot(`"grid-row-start:78;"`));
  test('rows_start_79"', () =>
    expect(grid.rows_start_79()).toMatchInlineSnapshot(`"grid-row-start:79;"`));
  test('rows_start_8"', () =>
    expect(grid.rows_start_8()).toMatchInlineSnapshot(`"grid-row-start:8;"`));
  test('rows_start_80"', () =>
    expect(grid.rows_start_80()).toMatchInlineSnapshot(`"grid-row-start:80;"`));
  test('rows_start_81"', () =>
    expect(grid.rows_start_81()).toMatchInlineSnapshot(`"grid-row-start:81;"`));
  test('rows_start_82"', () =>
    expect(grid.rows_start_82()).toMatchInlineSnapshot(`"grid-row-start:82;"`));
  test('rows_start_83"', () =>
    expect(grid.rows_start_83()).toMatchInlineSnapshot(`"grid-row-start:83;"`));
  test('rows_start_84"', () =>
    expect(grid.rows_start_84()).toMatchInlineSnapshot(`"grid-row-start:84;"`));
  test('rows_start_85"', () =>
    expect(grid.rows_start_85()).toMatchInlineSnapshot(`"grid-row-start:85;"`));
  test('rows_start_86"', () =>
    expect(grid.rows_start_86()).toMatchInlineSnapshot(`"grid-row-start:86;"`));
  test('rows_start_87"', () =>
    expect(grid.rows_start_87()).toMatchInlineSnapshot(`"grid-row-start:87;"`));
  test('rows_start_88"', () =>
    expect(grid.rows_start_88()).toMatchInlineSnapshot(`"grid-row-start:88;"`));
  test('rows_start_89"', () =>
    expect(grid.rows_start_89()).toMatchInlineSnapshot(`"grid-row-start:89;"`));
  test('rows_start_9"', () =>
    expect(grid.rows_start_9()).toMatchInlineSnapshot(`"grid-row-start:9;"`));
  test('rows_start_90"', () =>
    expect(grid.rows_start_90()).toMatchInlineSnapshot(`"grid-row-start:90;"`));
  test('rows_start_91"', () =>
    expect(grid.rows_start_91()).toMatchInlineSnapshot(`"grid-row-start:91;"`));
  test('rows_start_92"', () =>
    expect(grid.rows_start_92()).toMatchInlineSnapshot(`"grid-row-start:92;"`));
  test('rows_start_93"', () =>
    expect(grid.rows_start_93()).toMatchInlineSnapshot(`"grid-row-start:93;"`));
  test('rows_start_94"', () =>
    expect(grid.rows_start_94()).toMatchInlineSnapshot(`"grid-row-start:94;"`));
  test('rows_start_95"', () =>
    expect(grid.rows_start_95()).toMatchInlineSnapshot(`"grid-row-start:95;"`));
  test('rows_start_96"', () =>
    expect(grid.rows_start_96()).toMatchInlineSnapshot(`"grid-row-start:96;"`));
  test('rows_start_97"', () =>
    expect(grid.rows_start_97()).toMatchInlineSnapshot(`"grid-row-start:97;"`));
  test('rows_start_98"', () =>
    expect(grid.rows_start_98()).toMatchInlineSnapshot(`"grid-row-start:98;"`));
  test('rows_start_99"', () =>
    expect(grid.rows_start_99()).toMatchInlineSnapshot(`"grid-row-start:99;"`));
});
