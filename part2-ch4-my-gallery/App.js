import { 
  Dimensions, 
  FlatList, 
  Image, 
  Platform, 
  SafeAreaView, 
  StyleSheet,
  Text,
  TouchableOpacity 
} from 'react-native';

import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import { useGallery } from './src/use-gallery';
import BigImgModal from './src/BigImgModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3;

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
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  }
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressAddAlbum = () => {
    openTextInputModal();
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

  const renderItem = ({ item: image, index }) => {
    const { id, uri } = image;
    if (id === -1) {
      return (      
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{ 
            width: columnSize, 
            height: columnSize,             
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontWeight: "100", fontSize: 45 }}>+</Text>
        </TouchableOpacity>
      );  
    }
    return (      
      <TouchableOpacity onPress={() => onPressImage(image)} onLongPress={() => onLongPressImage(id)}>
        <Image 
          source={{ uri }} 
          style={{ width: columnSize, height: columnSize }} 
        />
      </TouchableOpacity>
    );
  };

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
      />
      {/* 아미지 리스트 */}
      <FlatList
        data={ imageWithAddButton }
        renderItem={ renderItem }
        numColumns={3}
        style={{ zIndex: -1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === "android" ? 30: 0,
  },
});