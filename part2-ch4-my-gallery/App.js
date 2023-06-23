import { useEffect } from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import BigImgModal from './src/BigImgModal';
import ImageList from './src/ImageList';


import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import { useGallery } from './src/use-gallery';
import { useRewardAd } from './src/use-reward-ad';

export default function App() {

  const {
    imageWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    textInputModalVisible,
    openTextInputModal,
    closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
    deleteAlbum,
    bigImgModalVisible,
    openBigImgModal,
    closeBigImgModal,
    selectImage,
    selectedImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  } = useGallery();

  const {
    loadRewardAd,
    isRewarded,
    isClosed,
    resetAdValue,
  } = useRewardAd();

  const onPressOpenGallery = () => {
    pickImage();
  }
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressWatchAd = () => {
    loadRewardAd();
  };
  const onPressAddAlbum = () => {
    if (albums.length >= 2) {
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다.", "", [
        {
          style: "cancel",
          text: "닫기"
        },
        {
          text: "광고 시청",
          onPress: onPressWatchAd,
        }
      ])
    } else {
      openTextInputModal();
    }
  };
  const onSubmitEditing = () => {
    if (!albumTitle) return;

    // 1. 앨범 타이틀 추가
    addAlbum();

    // 2. 모달 닫기 & TextInput의 value 초기화
    closeTextInputModal();
    resetAlbumTitle();
  };
  const onPressTextInputModalBackdrop = () => {
    closeTextInputModal();
  };
  const onPressHeader = () => {
    if (isDropdownOpen) {
      closeDropDown();
    } else {
      openDropDown();
    }
  };
  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropDown();
  };
  const onLongPressAlbum = (albumId) => {
    deleteAlbum(albumId);
  };
  const onPressImage = (image) => {
    selectImage(image);
    openBigImgModal();
  };
  const onPressBigImgModalBackdrop = () => {
    closeBigImgModal();
  };
  const onPressLeftArrow = () => {
    moveToPreviousImage();

  };
  const onPressRightArrow = () => {
    moveToNextImage();
  };

  useEffect(() => {
    if (isRewarded && isClosed) {
      openTextInputModal();
      resetAdValue();
    }
  }, [isRewarded, isClosed]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker
        isDropdownOpen={isDropdownOpen}
        onPressHeader={onPressHeader}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        albums={albums}
        onPressAlbum={onPressAlbum}
        onLongPressAlbum={onLongPressAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={textInputModalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressTextInputModalBackdrop}
      />

      {/* 이미지를 크게 보는 Modal */}
      <BigImgModal
        modalVisible={bigImgModalVisible}
        onPressBackdrop={onPressBigImgModalBackdrop}
        selectedImage={selectedImage}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        showPreviousArrow={showPreviousArrow}
        showNextArrow={showNextArrow}
      />
      {/* 아미지 리스트 */}
      <ImageList
        imageWithAddButton={imageWithAddButton}
        onPressOpenGallery={onPressOpenGallery}
        onPressImage={onPressImage}
        onLongPressImage={onLongPressImage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
